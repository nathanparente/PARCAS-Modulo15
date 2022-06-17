function pegarTemperatura(){
    return new Promise(function(resolve,reject){
        console.log("Pegando temperatura, aguarde...");

        setTimeout(function(){
            resolve('40° na sombra');
        }, 2000)
    });
}

//USANDO A PROMISE 

console.log("código antes");

let temp = pegarTemperatura();

console.log("código durante");

temp.then(function(resultado){
    console.log("Temperatura: "+ resultado);
});
temp.catch(function(error){
    console.log("Não foi possivel pegar a temperatura");
});

console.log("código final")

