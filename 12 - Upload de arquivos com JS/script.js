function enviar (){
    let arquivo = document.getElementById('arquivo').files;

    let body = new FormData();
    body.append('title', 'Bla bla bla bla');
    body.apprend('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/upload',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data',
        } 
    })

}