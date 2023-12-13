const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Selamat Datang Di Data Center Siswa Indonesia');
});

const dataSiswaRoute = require('./DataSiswa');
app.use('/', dataSiswaRoute);

app.listen(port, () => {
  console.log(`Server berjalan di ${port}`);
});