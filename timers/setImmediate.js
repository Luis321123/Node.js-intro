function mostrarTema(tema){
    console.log(`Estoy Aprendiendo ${tema}`);   
}
console.log('antes de setImmediate');
setImmediate(mostrarTema, 'Javascript');