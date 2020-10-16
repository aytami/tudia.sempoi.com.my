var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var infoTanggal = tanggal + "/" + bulan + "/" + tahun;
// Daftar API Lainnya
// https://covid19.mathdro.id/api/countries/MY
// https://api.kawalcorona.com/malaysia/
let url = 'https://coronavirus-19-api.herokuapp.com/countries/Malaysia';
fetch(url)
.then(res => res.json())
.then((out) => {
document.getElementById("corona-positif").innerHTML = 'Positif : ' + out.cases;
document.getElementById("corona-positiftoday").innerHTML = 'Hari ini : ' + out.todayCases;
document.getElementById("corona-positifaktif").innerHTML = 'Aktif : ' + out.active;
document.getElementById("corona-meninggal").innerHTML = 'Meninggal : ' + out.deaths;
document.getElementById("corona-meninggaltoday").innerHTML = 'Hari ini : ' + out.todayDeaths;
document.getElementById("corona-sembuh").innerHTML = 'Sembuh : ' + out.recovered;
})
.catch(err => { throw err });
