//Clickear el botón apretando enter

let handleEnter = (e) => {
    if (e.keyCode === 13) {
    return document.getElementById("btn").click();
    }
};

///////////////////////////////////////////////////////////////////////
//Desarmado de la palabra para tenerla en un array, se separa en objetos que contienen el caracter y el index en el que se encuentra.

let word = "queso";

let wordArray = [];

const disarmWord = () => {
    let split = word.split(``);
    split.map((char) => {
        wordArray.push({char: char, pos: word.search(char)})
    })
}

disarmWord();

///////////////////////////////////////////////////////////////////////
//Chequeo del cumplimiento de las reglas para la palabra ingresada (5 letras, sin espacios)

let firstCheckpoint = false;

const checkWord = () => {
    let input = "";
    input = document.getElementById("textInput").value;
    if(input === word){
        alert("Adivinaste la palabra!")
    } else if(input.length === 5 && input.search(" ") === -1){
        firstCheckpoint = true;
    } else if(input === ""){
        alert("ingrese una palabra")
    } else if(input.length !== 5){
        alert("la palabra debe ser de cinco letras");
    } else if(input.search(" ")){
        alert("no ingrese espacios");
    }
};

///////////////////////////////////////////////////////////////////////
//Comparación de la palabra ingresada con la palabra objetivo

finalCheck = [];

const compareWord = () => {
    let input = "";
    input = document.getElementById("textInput").value;

    let foundInWord = [];

    let splitArray = input.split(``);

    splitArray.map((char) => {
        if(word.search(char) !== -1){
            foundInWord.push({char: char, pos: word.search(char)})
        } else {
            foundInWord.push(null);
        }
    })

     foundInWord.map((obj) => {
        if(obj !== null){
            wordArray.map((correctChar) => {
                if(obj.char === correctChar.char){
                    if(obj.pos !== correctChar.pos){
                        finalCheck.push({char: obj.char, pos: obj.pos, right: false})
                    } else {
                        finalCheck.push({char: obj.char, pos: obj.pos, right: true})
                    }
                }
            })
        } else {
            finalCheck.push(null);
        }
     })
}

///////////////////////////////////////////////////////////////////////
//Modificación del DOM para reflejar visualmente aciertos/fallos

let currentTry = 0;

const updateWordle = () => {
    switch(currentTry){
        case 0:
            console.log(currentTry);
            if(finalCheck[0] !== null){
                document.getElementById("11").innerHTML = finalCheck[0].char;
                if(finalCheck[0].right){
                    document.getElementById("11").style.color = "rgb(241, 241, 103)";
                }
                
            } else {
                document.getElementById("11").innerHTML = "_";
            }
            if(finalCheck[1] !== null){
                document.getElementById("12").innerHTML = finalCheck[1].char;
                if(finalCheck[1].right){
                    document.getElementById("12").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("12").innerHTML = "_";
            }
            if(finalCheck[2] !== null){
                document.getElementById("13").innerHTML = finalCheck[2].char;
                if(finalCheck[2].right){
                    document.getElementById("13").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("13").innerHTML = "_";
            }
            if(finalCheck[3] !== null){
                document.getElementById("14").innerHTML = finalCheck[3].char;
                if(finalCheck[3].right){
                    document.getElementById("14").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("14").innerHTML = "_";
            }
            if(finalCheck[4] !== null){
                document.getElementById("15").innerHTML = finalCheck[4].char;
                if(finalCheck[4].right){
                    document.getElementById("15").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("15").innerHTML = "_";
            }
            currentTry = 1;
            break;
        case 1:
            console.log(currentTry);
            if(finalCheck[0] !== null){
                document.getElementById("21").innerHTML = finalCheck[0].char;
                if(finalCheck[0].right){
                    document.getElementById("21").style.color = "rgb(241, 241, 103)";
                }
                
            } else {
                document.getElementById("21").innerHTML = "_";
            }
            if(finalCheck[1] !== null){
                document.getElementById("22").innerHTML = finalCheck[1].char;
                if(finalCheck[1].right){
                    document.getElementById("22").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("22").innerHTML = "_";
            }
            if(finalCheck[2] !== null){
                document.getElementById("23").innerHTML = finalCheck[2].char;
                if(finalCheck[2].right){
                    document.getElementById("23").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("23").innerHTML = "_";
            }
            if(finalCheck[3] !== null){
                document.getElementById("24").innerHTML = finalCheck[3].char;
                if(finalCheck[3].right){
                    document.getElementById("24").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("24").innerHTML = "_";
            }
            if(finalCheck[4] !== null){
                document.getElementById("25").innerHTML = finalCheck[4].char;
                if(finalCheck[4].right){
                    document.getElementById("25").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("25").innerHTML = "_";
            }
            currentTry = 2;
            break;
        case 2:
            console.log(currentTry);
            if(finalCheck[0] !== null){
                document.getElementById("31").innerHTML = finalCheck[0].char;
                if(finalCheck[0].right){
                    document.getElementById("31").style.color = "rgb(241, 241, 103)";
                }
                
            } else {
                document.getElementById("31").innerHTML = "_";
            }
            if(finalCheck[1] !== null){
                document.getElementById("32").innerHTML = finalCheck[1].char;
                if(finalCheck[1].right){
                    document.getElementById("32").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("32").innerHTML = "_";
            }
            if(finalCheck[2] !== null){
                document.getElementById("33").innerHTML = finalCheck[2].char;
                if(finalCheck[2].right){
                    document.getElementById("33").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("33").innerHTML = "_";
            }
            if(finalCheck[3] !== null){
                document.getElementById("34").innerHTML = finalCheck[3].char;
                if(finalCheck[3].right){
                    document.getElementById("34").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("34").innerHTML = "_";
            }
            if(finalCheck[4] !== null){
                document.getElementById("35").innerHTML = finalCheck[4].char;
                if(finalCheck[4].right){
                    document.getElementById("35").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("35").innerHTML = "_";
            }
            currentTry = 3;
            break;
        case 3:
            console.log(currentTry);
            if(finalCheck[0] !== null){
                document.getElementById("41").innerHTML = finalCheck[0].char;
                if(finalCheck[0].right){
                    document.getElementById("41").style.color = "rgb(241, 241, 103)";
                }
                
            } else {
                document.getElementById("41").innerHTML = "_";
            }
            if(finalCheck[1] !== null){
                document.getElementById("42").innerHTML = finalCheck[1].char;
                if(finalCheck[1].right){
                    document.getElementById("42").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("42").innerHTML = "_";
            }
            if(finalCheck[2] !== null){
                document.getElementById("43").innerHTML = finalCheck[2].char;
                if(finalCheck[2].right){
                    document.getElementById("43").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("43").innerHTML = "_";
            }
            if(finalCheck[3] !== null){
                document.getElementById("44").innerHTML = finalCheck[3].char;
                if(finalCheck[3].right){
                    document.getElementById("43").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("44").innerHTML = "_";
            }
            if(finalCheck[4] !== null){
                document.getElementById("45").innerHTML = finalCheck[4].char;
                if(finalCheck[4].right){
                    document.getElementById("45").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("45").innerHTML = "_";
            }
            currentTry = 4;
            break;
        case 4:
            console.log(currentTry);
            if(finalCheck[0] !== null){
                document.getElementById("51").innerHTML = finalCheck[0].char;
                if(finalCheck[0].right){
                    document.getElementById("51").style.color = "rgb(241, 241, 103)";
                }
                
            } else {
                document.getElementById("51").innerHTML = "_";
            }
            if(finalCheck[1] !== null){
                document.getElementById("52").innerHTML = finalCheck[1].char;
                if(finalCheck[1].right){
                    document.getElementById("52").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("52").innerHTML = "_";
            }
            if(finalCheck[2] !== null){
                document.getElementById("53").innerHTML = finalCheck[2].char;
                if(finalCheck[2].right){
                    document.getElementById("53").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("53").innerHTML = "_";
            }
            if(finalCheck[3] !== null){
                document.getElementById("54").innerHTML = finalCheck[3].char;
                if(finalCheck[3].right){
                    document.getElementById("54").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("54").innerHTML = "_";
            }
            if(finalCheck[4] !== null){
                document.getElementById("55").innerHTML = finalCheck[4].char;
                if(finalCheck[4].right){
                    document.getElementById("55").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("55").innerHTML = "_";
            }
            currentTry = 5;
            break;
            case 5:
                console.log(currentTry);
                alert("Usaste todos tus intentos!");
                break;
    }
}

///////////////////////////////////////////////////////////////////////
// Función integral

const Wordle = () => {
    checkWord();
    compareWord();
    updateWordle();
    finalCheck = [];
    document.getElementById("textInput").value = "";
}