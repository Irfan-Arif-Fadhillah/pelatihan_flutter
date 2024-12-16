const eventRepo = require('../repositories/event.repo')


const show =  async (req) => {
 let result = await eventRepo.showAll()
 return { hasil : result }
}

const insert =  async (req) => {
let param = {
    nama : req.body.nama,
    tempat_acara : req.body.tempat_acara,
    waktu_mulai : req.body.waktu_mulai,
    waktu_selesai : req.body.waktu_selesai,
    deskripsi : req.body.deskripsi,
    
}
 let result = await eventRepo.insert(param)
 return { hasil : result }
}
const update =  async (id, body) => {
let param = {
    nama : body.nama,
    tempat_acara : body.tempat_acara,
    waktu_mulai : body.waktu_mulai,
    waktu_selesai : body.waktu_selesai,
    deskripsi : body.deskripsi,
    
}
 let result = await eventRepo.update(id, param)
 return { hasil : result }
}
module.exports = {show,insert,update}