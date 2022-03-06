window.onload = function(){

    insertDiv()
    divWithP()
    divWithSixP()
    pWithText()
    insertInh2()
    createList()
    removeNodes()
    insertText()
    pInAllDivs()
}

//2.1

function insertDiv(){

 let div  = document.createElement("div");

 document.body.appendChild(div)
}

//2.2

function divWithP(){
    let divWithP = document.createElement("div")
    divWithP.innerHTML = '<p></p>';
    document.body.appendChild(divWithP)
}

//2.3

function divWithSixP(){
    let divWithSixP = document.createElement("div")
    
    for(let i = 0; i < 6; i++){
        let pTags = document.createElement("p")
        divWithSixP.appendChild(pTags);

     }

    document.body.appendChild(divWithSixP)

 
}

//2.4

function pWithText(){

    let text = document.createElement("p");
    text.innerHTML = "Soy dinámico!";
    document.body.appendChild(text);

}

//2.5

function insertInh2(){
    let h2 = document.querySelector("h2.fn-insert-here");
    h2.innerHTML = 'Wubba Lubba dub dub';
}

//2.6


function createList(){
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

    let ul = document.createElement("ul")

    for( let app of apps){

        let li = document.createElement("li")

        li.textContent = app

        ul.appendChild(li)
        
    }


    //Miro por la console para comprobar que se ha creado
    
    console.log(ul);
}

//2.7

function removeNodes(){

  let nodes = document.querySelectorAll(".fn-remove-me");

  for(let i = 0; i < nodes.length; i++){

    let parent = nodes[i].parentElement;

    parent.removeChild(nodes[i])
  }

}

//2.8

function insertText(){
    let p = document.createElement("p")
    p.textContent = 'Voy en medio!';
    let secondDiv = document.querySelectorAll("div")[1]
    document.body.insertBefore(p, secondDiv)

}


//2.9

function pInAllDivs(){

    
    let div = document.querySelectorAll("div.fn-insert-here")

    for(let i = 0; i < div.length; i++){
        let p = document.createElement("p");
        p.innerHTML  = 'Voy dentro!';
        div[i].appendChild(p)

    }

}
    