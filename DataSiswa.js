const express = require('express');
const app = express();

const dataSiswa = {
  Nama: 'Richard Muhammad',
  'Tanggal Lahir': '14 Januari 1994',
  JenisKelamin: 'Laki - Laki',
  Hobi: 'Membaca Buku',
};

app.get('/DataSiswa', (req, res) => {
  res.json(dataSiswa);
});

module.exports = app;