var result=(function reverseString(string_variable)
{
    let buffer=[];
    for(let i=0; i< string_variable.length;i++)
    {
        buffer.unshift(string_variable[i]);
    }
    console.log(buffer.join("")); 
})("reverse");