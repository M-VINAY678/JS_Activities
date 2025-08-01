function createCounter()
{
    let count =0;
    return {
    increment:()=>{console.log(++count);},
    decrement :()=>{console.log(--count);}
    };
}
/* This method creates separate object for each function 
so we call createCounter is creating different code execution environment for both functions
createCounter().increment();
createCounter().decrement(); */
const kind_of_obect_reference=createCounter();
kind_of_obect_reference.increment();
kind_of_obect_reference.decrement();

