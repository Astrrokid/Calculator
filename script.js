let transit=""
let number2= 0
let number1 = 0
let counterCheck = 0
let output= document.getElementById("ans")
let deci= document.getElementById("dot")

for(let i=0; i<10; i++){
    let buttonId= document.getElementById("btn-" + i)
    buttonId.addEventListener( 'click', function(){
        transit= transit+i
        output.textContent=transit
    })
}
 function operate(op){
    number1= Number(transit)
    counterCheck+=1
    transit=""
    operand=op
 }
function decimal(){
    transit= transit +"."
    output.textContent= transit
}
function ceOp(){
    transit=""
    counterCheck=0
    output.textContent = 0
    
}
function addOp(){operate("add")}
function subOp(){operate("sub")}
function divOp(){operate("div")}
function mulOp(){operate("mul")}
function squOp(){operate("square")}

function equalOp(){
    if (counterCheck===1){
        number2=Number(transit)
        switch(operand){
            case "add":
                answer= number1 + number2
                transit=""
                counterCheck=0
            break
            case "sub":
                answer= number1-number2
                transit=""
                counterCheck=0
            break
            case "div":
                answer= number1/number2
                answer.toFixed(5)
                transit=""
                counterCheck=0
            break
            case "mul":
                answer= number1*number2
                transit=""
                counterCheck=0
            break
            case "square":
                answer= number1*number1
                transit=""
                counterCheck=0
            break
        }
        
    }
    output.textContent=answer
}


