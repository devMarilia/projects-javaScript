//Entrata de dados
let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("ul")
//Item que não existe ainda no HTML
let item = document.getElementsByTagName("li")

//Entrada de dados
function inputLength(){
    return input.value.length;
}
// Criar elemento

function creatListElement(){
    let li = document.createElement("li")

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = " "

    function crossOut(){
        li.classList.toggle("done")
    }

    li.addEventListener("click", crossOut)

    let deliteBtn = document.createElement("button")
    deliteBtn.appendChild(document.createTextNode("X"))
    li.appendChild(deliteBtn)
    deliteBtn.addEventListener("click", deleteListItem)

    function deleteListItem(){
        li.classList.add("delete")
    }
    
}

enterButton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)

function addListAfterClick(){
    if (inputLength() > 0){
        creatListElement()
    }
}

function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13)
    creatListElement();
}


