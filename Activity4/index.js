let global_variable = "global";
function scope() {
    let function_scope = "function";
    {
        let block_scope = "block";
        const block_variable="block";
        // JavaScripts looks for it in the current scope , 
        // if it is not Found , 
        // it moves up the chain to the parent scope and 
        // continue until it either finds the variable or reaches the global scope
        console.log(global_variable);
        console.log(function_scope);
        console.log(block_scope);
        console.log(block_variable);
    }
    try {
        console.log(block_scope);
    } catch (error) {
        console.log("we cann't access the block level variable outside the block");
    }
    try {
        console.log(block_variable);
    } catch (error) {
        console.log("we cann't access the block level const variable outside the block");
    }
}
scope();