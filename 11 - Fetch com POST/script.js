async function inserirPost(){
    document.getElementById('posts').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:'Título de teste',
            body: 'Corpo de teste',
            userId: 4,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let json = await req.json();

    console.log(json)
}