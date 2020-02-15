// Criar os x do lado da lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i<myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Criar a função de apagar o elemento da lista quando clicar no x
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// adicionando a função de check nos objetos da lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false)

//definindo função de adicionar tarefa na lista
function newElement(){
    var novoli = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue)
    novoli.appendChild(text);

    if(inputValue === ''){
        alert("Escreva algo");
    }
    else{
        document.getElementById('myUL').appendChild(novoli);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    novoli.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
      }
    }
}

// Definindo função de remover tudo
function removeAll(){
    var lst = document.getElementsByTagName("ul");
      lst[0].innerHTML = "";
  }