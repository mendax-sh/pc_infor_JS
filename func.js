const os = require('os');
const dayjs = require('dayjs')

const getpcdata = () => {
let bytestotal = null;
let bytesfree = null;
let total = null;

    let  info = dayjs().format('MM/DD/YYYY HH:mm:ss');

    bytestotal = os.totalmem();
    bytesfree = os.freemem();
    total = (bytestotal - bytesfree);
   

    if      (bytestotal >= 1073741824) { bytestotal = (bytestotal / 1073741824).toFixed(2) + " GB"; }
    else if (bytestotal >= 1048576)    { bytestotal = (bytestotal / 1048576).toFixed(2) + " MB"; }
    else if (bytestotal >= 1024)       { bytestotal = (bytestotal / 1024).toFixed(2) + " KB"; }
    else if (bytestotal > 1)           { bytestotal = bytestotal + " bytes"; }
    else if (bytestotal == 1)          { bytestotal = bytestotal + " byte"; }
    else                          { bytestotal = "0 bytes"; }

    if      (bytesfree >= 1073741824) { bytesfree = (bytesfree / 1073741824).toFixed(2) + " GB"; }
    else if (bytesfree >= 1048576)    { bytesfree = (bytesfree / 1048576).toFixed(2) + " MB"; }
    else if (bytesfree >= 1024)       { bytesfree = (bytesfree / 1024).toFixed(2) + " KB"; }
    else if (bytesfree > 1)           { bytesfree = bytesfree + " bytes"; }
    else if (bytesfree == 1)          { bytesfree = bytesfree + " byte"; }
    else                          { bytesfree = "0 bytes"; }

    if      (total >= 1073741824) { total = (total / 1073741824).toFixed(2) + " GB"; }
    else if (total >= 1048576)    { total = (total / 1048576).toFixed(2) + " MB"; }
    else if (total >= 1024)       { total = (total / 1024).toFixed(2) + " KB"; }
    else if (total > 1)           { total = total + " bytes"; }
    else if (total == 1)          { total = total + " byte"; }
    else                          { total = "0 bytes"; }


    let json = {
        Data_Hora: info,
        ram_total: bytestotal,
        ram_livre: bytesfree,
        ram_usada: total,
        os:os.type(),
        arch:os.arch()
    }
    return json
}

module.exports = {
    getpcdata
}