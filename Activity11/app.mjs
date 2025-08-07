import multiplyTheNumbers,{add} from "./mathUtils.mjs"; // here we can see multiplyTheNumber, name is different from export{default} name, but add name is same as export name.
// for default , their is no need of addding currly brackets
console.log(multiplyTheNumbers(5,10));
console.log(add(10,5));