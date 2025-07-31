function add(operand1,operand2){
    console.log(operand1+operand2);
}
function subtract(operand1,operand2){
    console.log(operand1-operand2);
}
function multiply(operand1,operand2){
    console.log(operand1*operand2);
}
function divide(operand1,operand2){
    console.log(operand1/operand2);
}
function calculate(operand1,operand2,operation)
{
    if(operation=="add")
    {
        add(operand1,operand2);
    }
    else if(operation=="subtract")
    {
        subtract(operand1,operand2);
    }
    else if(operation=="multiply")
    {
        multiply(operand1,operand2);
    }
    else
    {
        divide(operand1,operand2);
    }
}
calculate(10,2,"subtract");