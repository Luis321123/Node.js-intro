//eliminar archivo
fs.unlink('index.html', (err) => {
    if (err){
        throw err;
    }
    console.log('archivo eliminado');
});