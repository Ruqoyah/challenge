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

const getSpreadSheetValues = ({ spreadsheetId, auth, sheetName }) => {
    return sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetName,
        // majorDimension: "COLUMNS"
    })
        .then((response) => response)
        .catch((error) => error)
}

module.exports = {
    getAuthToken,
    getSpreadSheetValues
}