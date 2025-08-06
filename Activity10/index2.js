async function fetchData(url) {
    let response= await fetch(url);
    let data=await response.json();
    data=data.slice(0,5);
    for(key in data){
        console.log(data[key]);
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts");
