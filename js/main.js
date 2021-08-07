

let result = 0 

let result_div = document.getElementById("result")
let add_btn = document.getElementById("add")
let sub_btn = document.getElementById("subtract")

add_btn.addEventListener("click", add); 
sub_btn.addEventListener("click", sub)

document.getElementById("numb").value = 1

function add() {
    let value_input = parseInt(document.getElementById("numb").value)
    result += value_input
    console.log(result)
    result_div.innerText = (result)
    
}

function sub() {
    let value_input = parseInt(document.getElementById("numb").value)
    result -= value_input
    if(result < 0){result_div.style.color = "red"}
    result_div.innerText = (result)
   
}
