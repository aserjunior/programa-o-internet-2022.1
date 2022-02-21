
const queryStr =  'https://www.google.com/search?client=opera-gx&q=paul+george&sourceid=opera&ie=UTF-8&oe=UTF-8';
const usp = new URLSearchParams(queryStr)


for (const [key, value] of usp){
    console.log(`<a href="${key}"> ${value}</a>`)
}

console.log(usp.toString())