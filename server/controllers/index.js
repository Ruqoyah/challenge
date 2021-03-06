import BuyRequest from '../models/buyRequest';
import SellRequest from '../models/sellRequest';
import { getAuthToken, getLastRange, getSpreadSheetValues } from '../services/googleSheetService';
import { formatData } from '../utils/helpers';

const spreadsheetId = '1F6BvjBRKMf6cVTzrb3O-4uORjnhHN0I6DC9jkuxQibo';
const sheetName = 'IPHONES'

/**
 * Save request to the database
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 * @return {object} - success or failure
 */
export const loadRequest = async (req, res) => {
  let auth = await getAuthToken()

  const lastRowRange = await getLastRange({ spreadsheetId, auth, sheetName });

  const sellRequestSheets = await getSpreadSheetValues({
    spreadsheetId,
    auth,
    sheetNameRange: `IPHONES!L3:U${lastRowRange}`
  })

  const buyRequestSheets = await getSpreadSheetValues({
    spreadsheetId,
    auth,
    sheetNameRange: `IPHONES!A3:J${lastRowRange}`
  })

  BuyRequest.deleteMany({}, () => {
    SellRequest.deleteMany({}, () => {
      BuyRequest.insertMany(formatData(buyRequestSheets.data.values))
        .then(() => {
          SellRequest.insertMany(formatData(sellRequestSheets.data.values))
          .then(() => {
            return res.status(200).json({
              response: 'Request loaded Successfully',
            });
          })
          .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
    })
  })
}

/**
 * Get requests from database
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 * @return {object} - success or failure
 */
export const getRequests = async (req, res) => {

  const { fetch, page = 1, limit = 15, storageSize, grade, name, priceMin, priceMax } = req.query;

  const buyRequestCount = await BuyRequest.count({
    price: { $gte: priceMin, $lte: priceMax },
      $or: [
        {storageSize: new RegExp('^'+storageSize+'$', "i")}, 
        {grade: new RegExp('^'+grade+'$', "i")}, 
        {name}
      ]
  })

  const sellRequestCount = await SellRequest.count({
    price: { $gte: priceMin, $lte: priceMax },
      $or: [
        {storageSize: new RegExp('^'+storageSize+'$', "i")}, 
        {grade: new RegExp('^'+grade+'$', "i")}, 
        {name}
      ]
  })

  if(fetch === 'buy') {

    BuyRequest.find({ 
      price: { $gte: priceMin, $lte: priceMax },
      $or: [
        {storageSize: new RegExp('^'+storageSize+'$', "i")}, 
        {grade: new RegExp('^'+grade+'$', "i")}, 
        {name}
      ]
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .then((response) => {

        return res.status(200).json({
          response,
          totalPages: Math.ceil(buyRequestCount / limit),
          currentPage: page,
          count: buyRequestCount
        });

      })
      .catch((error) => res.status(500).json({error}));
      
  } else if (fetch === 'sell') {

    SellRequest.find({
      price: { $gte: priceMin, $lte: priceMax },
      $or: [
        {storageSize: new RegExp('^'+storageSize+'$', "i")}, 
        {grade: new RegExp('^'+grade+'$', "i")}, 
        {name}
      ]
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .then(async(response) => {

        return res.status(200).json({
          response,
          totalPages: Math.ceil(sellRequestCount / limit),
          currentPage: page,
          count: sellRequestCount
        });

      })
    .catch((error) => res.status(500).json({error}));

  } else {

    return res.status(400).json({
      error: 'You need to pass query fetch=buy or fetch=sell'
    });

  }
}
