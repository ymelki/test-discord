const { GoogleSpreadsheet } = require('google-spreadsheet');

async function getDataFromGoogleSheets() {
  const doc = new GoogleSpreadsheet('17zJ1ESFLzgkpfLVYe8g8ve_CltS4oPuOZR1-uZRaRkg');
  await doc.useServiceAccountAuth({
    client_email: 'datayom@eng-ridge-412615.iam.gserviceaccount.com',
    private_key: '87ddd8255ce0c3fd5827657670976c609a30a75c',
  });
  await doc.loadInfo(); // N'oubliez pas de charger les informations du document

  const sheet = doc.sheetsByIndex[0]; // Sélectionnez la feuille appropriée
  const rows = await sheet.getRows();

  // Convertissez les données en format approprié et utilisez-les dans votre application

  console.log(rows);
}

getDataFromGoogleSheets();
