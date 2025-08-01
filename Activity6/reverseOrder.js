let array=[1,2,3,4,5,6,7];
let len=array.length;
console.log("Before reverse "+array);
for(let i=0;i<len/2;i++)
{
    let buffer=array[i];
    array[i]=array[len-1-i];
    array[len-1-i]=buffer;
}
console.log("After reverse "+array.toString());