const fs = require('fs');
const path = require('path');
const axios = require('axios').default;

axios({
    method: "get",
    url: "https://www.theplayoffs.com.br/wp-content/uploads/2021/06/paul-george.jpg",
    responseType: "stream",
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream("imagem.jpg"));
  });