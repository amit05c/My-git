// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
// console.log(navbar())

document.getElementById('navbar').innerHTML=navbar()


import { sidebar } from "../components/sidebar.js";
// console.log(sidebar)

document.getElementById('sidebar').innerHTML=sidebar()

import { news_data } from "../components/fetch.js";

// console.log(news_data)


let url= "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

let news= async()=> {
let res= await news_data(url)
// console.log(res)
append(res)
    
}

news()


let append= (data)=>{
    data.forEach(({author,title,description,urlToImage}) => {
        // console.log(el)
       
        let card= document.createElement('div')
        card.setAttribute('class','news')

        let image= document.createElement('img')
        image.src=urlToImage

        let Author= document.createElement('h5')
        Author.innerHTML= author

        let Title= document.createElement('p')
        Title.innerHTML= title;

        let Description= document.createElement('p')
        Description.innerHTML= description

        // console.log(card,image,author,title,description)
        card.append(image,author,title,description)
        document.getElementById('results').append(card)
        
    })
}


document.getElementById('search_input').onkeypress= async(event)=>{
    // search(event)
    
    let query= document.getElementById('search_input').value
    console.log(query)
 let url2 = `https://masai-mock-api.herokuapp.com/news?q=${query}` 
 let res = await fetch(url2)
 let data= await res.json()
 console.log(data)
// storeData(data)

if(event.key=="Enter"){
    window.location.href="./search.html"
}

}

// let search=async(e)=>{
//     // console.log('amit')
   
//     let query= document.getElementById('search_input').value
//     console.log(query)
//  let url2 = `https://masai-mock-api.herokuapp.com/news?q=${query}` 
//  let res = await fetch(url2)
//  let data= await res.json()
//  console.log(data)


// if(event.key=="Enter"){
//     window.location.href="./search.html"
// }
  

// }

let storeData = (data)=>{
    data.forEach(el=>{
        let obj={
            
        }
    })
}


