
const fs = require('fs');
const path = require('path');
const axios = require('axios').default;



const downloadFile = async (fileUrl, downloadFolder) => {
  
  const fileName = path.basename(fileUrl);

  
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://www.theplayoffs.com.br/wp-content/uploads/2021/06/paul-george.jpg',
      responseType: 'stream',
    });

    const w = response.data.pipe(fs.createWriteStream('image.jpg'));
    w.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
  } catch (err) {
    throw new Error(err);
  }
}; 


const IMAGE_URL =
  'https://www.theplayoffs.com.br/wp-content/uploads/2021/06/paul-george.jpg';
downloadFile(IMAGE_URL, 'download');

