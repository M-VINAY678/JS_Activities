function task1(callback_function) {
    console.log("completed task1");
    callback_function();
}
function task2(callback_function) {
    console.log("completed task2");
    callback_function();
}

function task3(callback_function) {
    console.log("completed task3");
    callback_function();
}
let arr = [task1, task2, task3];
function taskScheduler(arrary_variable) {
    let index = 0;
    function runTask() {
        if (index < arrary_variable.length) {
            let currentTask = arrary_variable[index];
            index++;
            currentTask(() => {
                runTask();
            });
        }
    }
    runTask();
}
taskScheduler(arr);