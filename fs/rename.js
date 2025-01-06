 //renombrar archivo
 fs.rename('index.html', 'index2.html', (err) => {
     if (err){
         throw err;    
     }
     console.log('index.html renombrado a index2.html');
 });
