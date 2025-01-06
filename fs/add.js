//agregar contido al final de un archivo
fs.appendFile('index2.html', '<p>este es el contenido agregado</p>', (err) => {
    if (err){
        throw err;
    }
    console.log('contenido agregado al final del archivo');
});