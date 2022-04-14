///////////////////////////////////////////////////////////////////////
//Colecciones

const letterContainersCollection = ["11", "12", "13", "14", "15", "21", "22", "23", "24", "25", "31", "32", "33", "34", "35", "41", "42", "43", "44", "45", "51", "52", "53", "54", "55"]

const wordCollection = ["queso", "cubos", "pizza", "apaga", "arder", "bayas", "cazar"];

let usedLetterCollection = [];

let word = "queso";

///////////////////////////////////////////////////////////////////////
//Elección de la palabra al azar

const chooseWord = () => {
    min = Math.ceil(0);
    max = Math.floor(wordCollection.length);
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    word = wordCollection[randomNum];
}

chooseWord();

///////////////////////////////////////////////////////////////////////
//Dark Mode

let darkMode = true;

const switchDarkMode = () => {
    if(darkMode){
        document.body.style.backgroundColor = "white";
        document.getElementById("title").style.color = "black";
        document.getElementById("checkboxLabel").style.color = "black";
        letterContainersCollection.map((obj) => {
            document.getElementById(obj).style.color = "black";
        })
        darkMode = false;
    } else {
        document.body.style.backgroundColor = "rgb(41, 40, 40)";
        document.getElementById("title").style.color = "white";
        document.getElementById("checkboxLabel").style.color = "white";
        letterContainersCollection.map((obj) => {
            document.getElementById(obj).style.color = "white";
        })
        darkMode = true;
    }
}

///////////////////////////////////////////////////////////////////////
//Debug Mode

let debug = false;

const switchDebug = () => {
    if(!debug){
        document.getElementById("debugDiv").innerHTML = `La palabra es "${word}"`;
        document.getElementById("debugDiv").style.visibility = "visible";
        debug = true;
    } else {
        document.getElementById("debugDiv").style.visibility = "hidden";
        debug = false;
    }
}

///////////////////////////////////////////////////////////////////////
//Clickear el botón apretando enter

let handleEnter = (e) => {
    if (e.keyCode === 13) {
    return document.getElementById("btn").click();
    }
};

///////////////////////////////////////////////////////////////////////
//Desarmado de la palabra para tenerla en un array, se separa en objetos que contienen el caracter y el index en el que se encuentra.

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

let checkpoint = false;

const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const checkWord = () => {
    let input = "";
    input = document.getElementById("textInput").value;
    if(input === word){
        alert("Adivinaste la palabra!")
    } else if(input.length === 5 && input.search(" ") === -1){
        checkpoint = true;
    } else if(input === ""){
        alert("ingrese una palabra")
    } else if(input.length !== 5){
        alert("la palabra debe ser de cinco letras");
    } else if(input.search(" ")){
        alert("no ingrese espacios");
    } else if(symbols.test(input)){
        alert("no ingrese símbolos");
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
            foundInWord.push({char: char, pos: input.search(char)})
        } else {
            foundInWord.push(null);
        }
    })

     foundInWord.map((obj) => {
        if(obj !== null){
            wordArray.map((correctChar) => {
                if(obj.char === correctChar.char){
                    if(obj.pos === correctChar.pos){
                        finalCheck.push({char: obj.char, pos: correctChar.pos, state: true})
                    } else {
                        finalCheck.push({char: obj.char, pos: correctChar.pos, state: false})
                    }
                }
            })
        } else {
            finalCheck.push(null);
        }
     })
     console.log(wordArray);
     console.log(foundInWord);
     console.log(finalCheck);
}

///////////////////////////////////////////////////////////////////////
//Modificación del DOM para reflejar visualmente aciertos/fallos

let currentTry = 0;

const updateWordle = () => {
    switch(currentTry){
        case 0:
            if(finalCheck[0] !== null){
                document.getElementById("11").innerHTML = finalCheck[0].char;
                if(finalCheck[0].state){
                    document.getElementById("11").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[0].state){
                    document.getElementById("11").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("11").innerHTML = "_";
                document.getElementById("11").style.color = "grey";
            }
            if(finalCheck[1] !== null){
                document.getElementById("12").innerHTML = finalCheck[1].char;
                if(finalCheck[1].state){
                    document.getElementById("12").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[1].state){
                    document.getElementById("12").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("12").innerHTML = "_";
                document.getElementById("12").style.color = "grey";
            }
            if(finalCheck[2] !== null){
                document.getElementById("13").innerHTML = finalCheck[2].char;
                if(finalCheck[2].state){
                    document.getElementById("13").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[2].state){
                    document.getElementById("13").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("13").innerHTML = "_";
                document.getElementById("13").style.color = "grey";
            }
            if(finalCheck[3] !== null){
                document.getElementById("14").innerHTML = finalCheck[3].char;
                if(finalCheck[3].state){
                    document.getElementById("14").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[3].state){
                    document.getElementById("14").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("14").innerHTML = "_";
                document.getElementById("14").style.color = "grey";
            }
            if(finalCheck[4] !== null){
                document.getElementById("15").innerHTML = finalCheck[4].char;
                if(finalCheck[4].state){
                    document.getElementById("15").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[4].state){
                    document.getElementById("15").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("15").innerHTML = "_";
                document.getElementById("15").style.color = "grey";
            }
            currentTry = 1;
            break;
        case 1:
            if(finalCheck[0] !== null){
                document.getElementById("21").innerHTML = finalCheck[0].char;
                if(finalCheck[0].state){
                    document.getElementById("21").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[0].state){
                    document.getElementById("21").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("21").innerHTML = "_";
                document.getElementById("21").style.color = "grey";
            }
            if(finalCheck[1] !== null){
                document.getElementById("22").innerHTML = finalCheck[1].char;
                if(finalCheck[1].state){
                    document.getElementById("22").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[1].state){
                    document.getElementById("22").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("22").innerHTML = "_";
                document.getElementById("22").style.color = "grey";
            }
            if(finalCheck[2] !== null){
                document.getElementById("23").innerHTML = finalCheck[2].char;
                if(finalCheck[2].state){
                    document.getElementById("23").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[2].state){
                    document.getElementById("23").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("23").innerHTML = "_";
                document.getElementById("23").style.color = "grey";
            }
            if(finalCheck[3] !== null){
                document.getElementById("24").innerHTML = finalCheck[3].char;
                if(finalCheck[3].state){
                    document.getElementById("24").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[3].state){
                    document.getElementById("24").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("24").innerHTML = "_";
                document.getElementById("24").style.color = "grey";
            }
            if(finalCheck[4] !== null){
                document.getElementById("25").innerHTML = finalCheck[4].char;
                if(finalCheck[4].state){
                    document.getElementById("25").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[4].state){
                    document.getElementById("25").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("25").innerHTML = "_";
                document.getElementById("25").style.color = "grey";
            }
            currentTry = 2;
            break;
        case 2:
            if(finalCheck[0] !== null){
                document.getElementById("31").innerHTML = finalCheck[0].char;
                if(finalCheck[0].state){
                    document.getElementById("31").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[0].state){
                    document.getElementById("31").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("31").innerHTML = "_";
                document.getElementById("31").style.color = "grey";
            }
            if(finalCheck[1] !== null){
                document.getElementById("32").innerHTML = finalCheck[1].char;
                if(finalCheck[1].state){
                    document.getElementById("32").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[01].state){
                    document.getElementById("32").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("32").innerHTML = "_";
                document.getElementById("32").style.color = "grey";
            }
            if(finalCheck[2] !== null){
                document.getElementById("33").innerHTML = finalCheck[2].char;
                if(finalCheck[2].state){
                    document.getElementById("33").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[2].state){
                    document.getElementById("33").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("33").innerHTML = "_";
                document.getElementById("33").style.color = "grey";
            }
            if(finalCheck[3] !== null){
                document.getElementById("34").innerHTML = finalCheck[3].char;
                if(finalCheck[3].state){
                    document.getElementById("34").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[3].state){
                    document.getElementById("34").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("34").innerHTML = "_";
                document.getElementById("34").style.color = "grey";
            }
            if(finalCheck[4] !== null){
                document.getElementById("35").innerHTML = finalCheck[4].char;
                if(finalCheck[4].state){
                    document.getElementById("35").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[4].state){
                    document.getElementById("35").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("35").innerHTML = "_";
                document.getElementById("35").style.color = "grey";
            }
            currentTry = 3;
            break;
        case 3:
            if(finalCheck[0] !== null){
                document.getElementById("41").innerHTML = finalCheck[0].char;
                if(finalCheck[0].state){
                    document.getElementById("41").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[0].state){
                    document.getElementById("41").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("41").innerHTML = "_";
                document.getElementById("41").style.color = "grey";
            }
            if(finalCheck[1] !== null){
                document.getElementById("42").innerHTML = finalCheck[1].char;
                if(finalCheck[1].state){
                    document.getElementById("42").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[1].state){
                    document.getElementById("42").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("42").innerHTML = "_";
                document.getElementById("42").style.color = "grey";
            }
            if(finalCheck[2] !== null){
                document.getElementById("43").innerHTML = finalCheck[2].char;
                if(finalCheck[2].state){
                    document.getElementById("43").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[2].state){
                    document.getElementById("43").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("43").innerHTML = "_";
                document.getElementById("43").style.color = "grey";
            }
            if(finalCheck[3] !== null){
                document.getElementById("44").innerHTML = finalCheck[3].char;
                if(finalCheck[3].state){
                    document.getElementById("4").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[3].state){
                    document.getElementById("44").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("44").innerHTML = "_";
                document.getElementById("44").style.color = "grey";
            }
            if(finalCheck[4] !== null){
                document.getElementById("45").innerHTML = finalCheck[4].char;
                if(finalCheck[4].state){
                    document.getElementById("45").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[4].state){
                    document.getElementById("45").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("45").innerHTML = "_";
                document.getElementById("45").style.color = "grey";
            }
            currentTry = 4;
            break;
        case 4:
            if(finalCheck[0] !== null){
                document.getElementById("51").innerHTML = finalCheck[0].char;
                if(finalCheck[0].state){
                    document.getElementById("51").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[0].state){
                    document.getElementById("51").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("51").innerHTML = "_";
                document.getElementById("51").style.color = "grey";
            }
            if(finalCheck[1] !== null){
                document.getElementById("52").innerHTML = finalCheck[1].char;
                if(finalCheck[1].state){
                    document.getElementById("52").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[1].state){
                    document.getElementById("52").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("52").innerHTML = "_";
                document.getElementById("52").style.color = "grey";
            }
            if(finalCheck[2] !== null){
                document.getElementById("53").innerHTML = finalCheck[2].char;
                if(finalCheck[2].state){
                    document.getElementById("53").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[2].state){
                    document.getElementById("53").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("53").innerHTML = "_";
                document.getElementById("53").style.color = "grey";
            }
            if(finalCheck[3] !== null){
                document.getElementById("54").innerHTML = finalCheck[3].char;
                if(finalCheck[3].state){
                    document.getElementById("54").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[3].state){
                    document.getElementById("54").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("54").innerHTML = "_";
                document.getElementById("54").style.color = "grey";
            }
            if(finalCheck[4] !== null){
                document.getElementById("55").innerHTML = finalCheck[4].char;
                if(finalCheck[4].state){
                    document.getElementById("55").style.color = "rgb(0, 209, 0)";
                } else if(!finalCheck[4].state){
                    document.getElementById("55").style.color = "rgb(241, 241, 103)";
                }
            } else {
                document.getElementById("55").innerHTML = "_";
                document.getElementById("55").style.color = "grey";
            }
            currentTry = 5;
            break;
            case 5:
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
    checkpoint = false;
}