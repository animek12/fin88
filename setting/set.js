// Silahkan ubah di bawah ini semau kalian
var nama = 'Md'
var namabot = 'Md-Bot'
var owner = '6282347260729'
var reply = '[ BOT ] WHATSAPP MD'
var donasi = 'https://i.ibb.co/3MkDvQh/63-E31005-DCDA820230208.jpg'


// yang Di bawah ini jangan di ubah 👇
exports.set = (a) => { 
if (a == "nama"){ return nama } 
else if (a == "namabot") { return namabot } 
else if (a == "owner") { return owner } 
else if (a == "reply") { return reply } 
else if (a == "donasi") { return donasi } 
else { return "undefined" }
}


