function addMovies(){
    let filmeFavorito = document.getElementById('filme').value;
    let elementListMovies = document.getElementById('listaFilmes');
    
    elementListMovies.innerHTML = elementListMovies.innerHTML + '<img src= ' + filmeFavorito + '>'; //só assim ele vai substituir novos valores
    //innerHTML serve para inserir conteúdo dentro dessa tag

    document.getElementById('filme').value = null; //quando clicar no botão adicionar filme ele limpa o imput com o id filme
    //O .value é por que eu quero alterar o valor 

    //document.write('<img src=' + filmeFavorito + '>');
}