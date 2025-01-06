
//remplazar contenido de un archivo
fs.writeFile('index2.html', '<h1>este es el contenido nuevo</h1>', (err) => {
    if (err){
        throw err;
    }
    console.log('contenido remplazado');
});

