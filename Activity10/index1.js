function delay(time)
{
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("executed");
            resolve();
        },time);
    });
}
async function temporary() {
    console.log("waiting for 2 second");
    await delay(2000);
    console.log("2 second passed");
}
temporary();