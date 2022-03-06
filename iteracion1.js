window.onload = function() {
    showButton()
    showH1()
    showAllP()
    showPokemonClassElem()
    showDataFuncTestMeElem()
    showTheThirdCharacter()
  }


  //1.1

  function showButton(){

   let button = document.querySelector(".showme");

   console.log(button);

}


//1.2

function showH1(){
    let h1 = document.querySelector("#pillado");

    console.log(h1);
}

//1.3

function showAllP(){
    let p = document.querySelectorAll("p");

    for(let i = 0; i < p.length; i++){

       console.log(p[i]);
    }
}


//1.4

function showPokemonClassElem(){
    let pokemonClassElem = document.querySelectorAll(".pokemon")

    for(let i = 0; i < pokemonClassElem.length; i++){
        console.log( pokemonClassElem[i]);
    }
}

//1.5

function showDataFuncTestMeElem(){
    let dataFuncTestMe = document.querySelectorAll('[data-function="testMe"]')

    for(let i = 0; i < dataFuncTestMe.length; i++){
       console.log(dataFuncTestMe[i]);
    }

}

//1.6

function showTheThirdCharacter(){

    let dataFuncTestMe = document.querySelectorAll('[data-function="testMe"]')

    console.log(dataFuncTestMe[2].innerHTML);
    
}

