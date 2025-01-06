const fs = require('fs');

fs.readFile('inde.html', 'utf-8', (err, contenido) => {
    if (err) {
        throw err;
    }else{
    console.log(contenido);
    }
 });

//con throw se termina automaticamente la ejecución



