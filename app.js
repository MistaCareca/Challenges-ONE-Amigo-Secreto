//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector("#amigo").value;
    if(amigo === ""){
        alert("Por favor, insira um nome.");
    } else{
        amigos.push(amigo);
        atualizarLista();
        document.querySelector("#amigo").value = "";
    }
}

function atualizarLista() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        
        const item = document.createElement("li");
        
        // modifiquei o valor do i apenas na exebiçao
        item.textContent = `${i + 1} - ${amigo}`;

        listaAmigos.appendChild(item);
    }
    
}