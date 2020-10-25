const { google } = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const getAuthToken = () => {
    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES
    });
    return auth.getClient()
        .then((response) => response)
        .catch((error) => error)
}

const getLastRange = ({ spreadsheetId, auth, sheetName }) => {
    return sheets.spreadsheets.values.get({
        spreadsheetId, 
        auth, 
        range: sheetName
    })
    .then((response) => response.data.values.length)
    .catch((error) => error)
}

const getSpreadSheetValues = async ({ spreadsheetId, auth, sheetNameRange }) => {
    return sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetNameRange
    })
        .then((response) => response)
        .catch((error) => error)
}

module.exports = {
    getAuthToken,
    getLastRange,
    getSpreadSheetValues
}