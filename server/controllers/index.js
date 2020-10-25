import BuyRequest from '../models/buyRequest';
import SellRequest from '../models/sellRequest';
import { getAuthToken, getLastRange, getSpreadSheetValues } from '../services/googleSheetService';
import { formatData } from '../utils/helpers';

const spreadsheetId = '1F6BvjBRKMf6cVTzrb3O-4uORjnhHN0I6DC9jkuxQibo';
const sheetName = 'IPHONES'

/**
 * Save buy request to the database
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 * @return {object} - success or failure
 */
export const createBuyRequest = async (req, res) => {
  let auth = await getAuthToken()

  const lastRowRange = await getLastRange({ spreadsheetId, auth, sheetName });

  const buyRequestRange = `IPHONES!A3:J${lastRowRange}`

  const buyRequestSheets = await getSpreadSheetValues({
    spreadsheetId,
    auth,
    sheetNameRange: buyRequestRange
  })

  return BuyRequest.insertMany(formatData(buyRequestSheets.data.values))
    .then((response) => {
      console.log(response, 'hey')
      return res.status(200).json({
        projects: 'Inserted Successfully',
      });
    })
    .catch((error) => res.status(500).json({ error }));
}

/**
 * Save sell request to the database
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 * @return {object} - success or failure
 */
export const createSellRequest = async (req, res) => {

  let auth = await getAuthToken()
  
  const lastRowRange = await getLastRange({ spreadsheetId, auth, sheetName });

  const sellRequestRange = `IPHONES!L3:U${lastRowRange}`

  const sellRequestSheets = await getSpreadSheetValues({
    spreadsheetId,
    auth,
    sheetNameRange: sellRequestRange
  })
  
  return SellRequest.insertMany(formatData(sellRequestSheets.data.values))
    .then((response) => {
      return res.status(200).json({
        projects: 'Inserted Successfully',
      });
    })
    .catch((error) => res.status(500).json({ error }));
}

