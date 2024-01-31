
async function getValues(spreadsheetId, range) {
    const {GoogleAuth} = require('google-auth-library');
    const {google} = require('googleapis');
  
    const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
  
    const service = google.sheets({version: 'v4', auth});
    try {
      const result = await service.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const numRows = result.data.values ? result.data.values.length : 0;
      console.log(`${numRows} rows retrieved.`);
      return result;
    } catch (err) {
      // TODO (developer) - Handle exception
      throw err;
    }
  }


  const spreadsheetId = '17zJ1ESFLzgkpfLVYe8g8ve_CltS4oPuOZR1-uZRaRkg';
  const range = 'Sheet1!A1:B10'; // Exemple de plage
  
  
getValues(spreadsheetId, range)
  .then(result => {
    console.log('Valeurs récupérées :', result.data);
  })
  .catch(err => {
    console.error('Erreur lors de la récupération des valeurs :', err);
  });
