
const const_variable = 2;
function Testing_variables() {

    {
        if(var_variable==undefined)
        {
            console.log("var_variable is undefined");
        }
        //here we get error because let does hoist but without default value.
        try {
            console.log(let_variable);
        } catch (error) {
            console.log("let does hoist but without default value");
        }
        var var_variable = 0;
        let let_variable = 1;
        console.log(var_variable);
        console.log(let_variable);
    }
    try {
        console.log(var_variable);
    } catch (error) {
        console.log(error);
    }
    try {
        console.log(let_variable);
    } catch (error) {
        console.log("let_variable cannot be accessed because it is block scope");
    }
}
Testing_variables();
let color=["black","blue"];
console.log(`The color is ${color[0]}`);
// modifying
color[1]="yellow";
console.log(`After modifying color arary ${color}`);
color.push("blue");
console.log(color);
color.unshift("orange");
console.log(color);
color.forEach((eachcolor)=>{
    console.log(eachcolor)
})
let string_variable="";
if(!string_variable)
{
    console.log("Empty string variables is falsy");
}
//concatenation
string_variable+="string";
if(string_variable)
{
    console.log("Non-Empty string variables is truthy");
}
console.log(`the sliced value is ${string_variable.slice(0,3)}`);
console.log(`the length of string is ${string_variable.length}`);
//conversion string to object and object to string
var fruits={
    name:"orange",color:"orange"
};
console.log(`object to string ${JSON.stringify(fruits)}`)
var object_string=JSON.stringify(fruits);
var string_to_object=JSON.parse(object_string);
console.log(`converted string to object , its keys are ${Object.keys(string_to_object)} and it values are ${Object.values(string_to_object)}`);