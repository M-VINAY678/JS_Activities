function delayedLowerCase(str)
{
    return new Promise((resolve , reject)=>{
        if(typeof str=='string')
        {
            resolve(str.toLowerCase());
        }
        else
        {
            reject("check once again");
        }
    });
}
function delayedLowerCaseLength(str)
{
    return new Promise((resolve , reject)=>{
        if(typeof str=='string')
        {
            resolve(str.length);
        }
        else
        {
            reject("check once again");
        }
    });
}
delayedLowerCase("HELLO").then(res=>{
    return delayedLowerCaseLength(res).then(data=>{
        return (res+" - "+data);
    })
}).then ((res)=> console.log(res))
.catch(error=>console.log("error"));