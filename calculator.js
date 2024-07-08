const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];


let output = "";

// function calculated (buttonValue){
//     console.log(buttonValue)
// }

const calculate = (buttonValue)=>{
    if(buttonValue ==="=" && output !==""){
        output = eval(output)
    }else if (buttonValue ==="AC"){
        output = "";
    }else if (buttonValue === "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output ==="" && specialChars.includes(buttonValue))
                  return;
                output += buttonValue;
    }

    display.value = output;
}


buttons.forEach((button)=>{
    button.addEventListener("click",event =>{
        calculate(event.target.innerHTML)
    })  
})
























// let output = "";

// const calculate =(btnValue)=>{
//     if (btnValue === "=" && output !== ""){
//         output = eval(output.replace("%","/100"))
//     }else if (btnValue ==="AC"){
//         output = ""
//     }else if (btnValue ==="DEL"){
//         output = output.toString().slice(0,-1)
//     }else {
//         if(output ==="" && specialChars.includes(btnValue))
//             return;
//         output += btnValue;
        
//     }
//     display.value = output;
// }



// buttons.forEach((button) =>{
//     button.addEventListener("click",event =>{
//        calculate(event.target.innerHTML)
//     })
// })