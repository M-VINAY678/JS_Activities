//map function
function doubleNumbers(arr){
    let result=arr.map((arr_items)=>
         arr_items*arr_items
    );
    return result;
}
console.log(doubleNumbers([1,2,3,4,5]));
function filterEvenNumbers(arr){
    let result=arr.filter((arr_items)=>
         arr_items%2==0
    );
    return result;
}
console.log(filterEvenNumbers([1,2,3,4,5]));

function sumNumbers(arr){
    let result=arr.reduce((accumulator,current)=>
    {
        return accumulator+current;

    },0
    );
    
    return result;
    
}
console.log(sumNumbers([1,2,3,4,5]));
