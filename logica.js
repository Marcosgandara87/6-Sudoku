var sudoku = [[],[],[],[],[],[],[],[],[],[]]


var cargar ="195743862431865927876192543387459216612387495549216738763524189928671354254938671"
var cargar = "295743861431865927876192543387459216612387495549216738763524189928671354154938672"
var cargar="1946 3857863571249527984163349216785781435926256897314618359472432768591975142638"

ui=0
errores = 0


let carga =()=>{
    for (i = 1; i<10;i++){
        let maindiv = document.getElementById("divMain")
        let fila = document.createElement("div")
        fila.id = "a"+i

        for (a=1;a<10;a++){
            while (ui < 81){
            sudoku[i][a] = cargar[ui]
            ui ++
            let col = document.createElement("input")
            col.value= sudoku[i][a]
            col.id = a
           
            fila.appendChild(col)
            break
            }
            
        }
        maindiv.appendChild(fila)

    }
    errores = 0
}




let validarLineas =() =>{
    linea = []
    var contador = 0
    errorlinea= []
    for (i = 1; i<10;i++){
        for (a=1;a<10;a++){
        linea.push(sudoku[i][a])
        }
              
        linea.forEach(numero => {
            for (a=1;a<10;a++){
            
                if ((numero == sudoku[i][a]) && (sudoku[i][a] != " ")&& (sudoku[i][a] != "") &&(numero != " ")&&(numero != " ")){
                    contador += 1
                }
                
                if (contador >= 2){
                    if(!errorlinea.includes(numero))
                    errores++
                    errorlinea.push(numero)
                    console.log("error con el numero ", sudoku[i][a],)
                    contador = 0
                }               
            }
            contador =0
        
        });
        linea.splice(0,10)    
        
    
    errorlinea.forEach(num => {
                        
        let diverror = document.getElementById("a"+i).childNodes
            for (m = 0;m<9;m++){
            
            if(diverror[m].value == num){
            diverror[m].classList.add("error1")
            
            contador =0
            }
        }
    });

    errorlinea.splice(0,10)
} 
    
    
    for (i = 1; i<10;i++){
        for (a=1;a<10;a++){
        linea.push(sudoku[a][i])
        }
              
        linea.forEach(numero => {
            for (a=1;a<10;a++){
            
                if ((numero == sudoku[a][i]) && (sudoku[a][i] != " ") && (sudoku[a][i] != "")&&( numero != " ")&&(numero != " ")){
                    contador += 1
                }
                
                if (contador >= 2){
                    if(!errorlinea.includes(numero))
                    errores ++ 
                    errorlinea.push(numero)
                    console.log("error con el numero ", sudoku[a][i],)
                    contador = 0
                }
            }

            contador =0
        });

        linea.splice(0,10)

        errorlinea.forEach(num => {
      
            for (m = 1;m<10;m++){   

            let diverror = document.getElementById("a"+m).childNodes
            
                if(diverror[i-1].value == num){
                diverror[i-1].classList.add("error1")
                
                contador =0
                }
            }
        });
    
        errorlinea.splice(0,10)
    }
}

let validarCuadrado = (pr1,pr2,pr3,pr4)=>{
    errores12= []
    cuadrado = []
    var contador = 0
    
    for (i =pr1; i<pr2;i++){
        for (a=pr3;a<pr4;a++){
        
        cuadrado.push(sudoku[i][a])
        
        }
    }
    console.log(cuadrado)
    cuadrado.forEach(numero=>{
        for (i =pr1; i<pr2;i++){
            for (a=pr3;a<pr4;a++){
                if ((numero == sudoku[i][a]) && (sudoku[i][a] != " ") && (sudoku[i][a] != "") &&(numero != " ")&&(numero != "")){  
                    contador +=1
                }
                if(contador >=2){
                    if(!errores12.includes(numero))
                    errores++
                    errores12.push(numero)
                    
                    contador = 0
                }
                          
               
            }
        }
        contador = 0

        



    });
    cuadrado.splice(0,10)

    errores12.forEach(error => {
        for (i =pr1; i<pr2;i++){
            let diverror = document.getElementById("a"+i).childNodes
            for (a=pr3;a<pr4;a++){
                if(error == diverror[a-1].value)
                diverror[a-1].classList.add("error1")
            }
        }
                
    });
    


}

document.addEventListener("input",(input) =>{
   
    cargar = ""
    var x = 0
    for (i = 1; i<10;i++){
        let diverror = document.getElementById("a"+i).childNodes
        
        for (a=1;a<10;a++){
            
            sudoku[i][a]  = diverror[a-1].value
            cargar = cargar + sudoku[i][a]

            
            x = x+ parseInt(sudoku[i][a])
            
        }
        console.log(x)
        }
        
        
        var inputs =document.getElementsByTagName("input") 
        for (r=0;r< inputs.length;r++ ){
            inputs[r].classList.remove("error1")

        }

        console.log(cargar)

        validador();



})


var x = 0
for (a=1;a<10;a++){
    for(b=1; b<10;b++){
        
        
        x = x + b
        
        

    }
    console.log(x)

}


let generadorSudoku =()=>{









}






let validador =()=>{
    errores = 0;
    var x = 1
    var y = 4
    validarLineas();
    validarCuadrado(x,y,x,y)
    validarCuadrado(x,y,x+3,y+3)
    validarCuadrado(x,y,x+6,y+6)
    validarCuadrado(x+3,y+3,x+3,y+3)
    validarCuadrado(x+3,y+3,x+6,y+6)
    validarCuadrado(x+6,y+6,x+3,y+3)
    validarCuadrado(x+6,y+6,x+6,y+6)
    validarCuadrado(x+6,y+6,x,y)
    console.log(sudoku)
console.log("Errores: " + errores)
}


carga();
validador();
