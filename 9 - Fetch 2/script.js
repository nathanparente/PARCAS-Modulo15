function loadPosts(){
    document.getElementById('posts').innerHTML = "Carregando...";
    
    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            montarBlog(json);


            document.getElementById('posts').innerHTML = json.lenght+' posts';
        })
        .catch(function(error){
            console.log("Deu problema");
        });
}

function montarBlog(lista){
    let html =  '';

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body;
        html += '</hr>';
    }

    document.getElementById('posts').innerHTML = html;
}