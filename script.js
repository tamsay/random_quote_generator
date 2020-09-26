let category = document.querySelector('#categories');
let generateQuoteBtn = document.querySelector('#generateQuoteBtn')
let resultDisplay = document.querySelector('#resultDisplay')
let body = document.querySelector('body')

body.onload=()=>{
    getQuote('')
}

category.addEventListener('input', ()=>{
    getQuote(category.value)
})

let getQuote =(tag)=>{

    fetch(`https://api.quotable.io/quotes/?limit=1995&tags=${tag}`)
    .then(response => response.json())
    .then(data => {
        let quotes = []
        data.results.map(items=>{
            quotes.push(items.content)
        })
        displayResult(quotes)
    })
}

generateQuoteBtn.addEventListener('click', ()=>{
    getQuote(category.value)
})

let displayResult =(data)=>{

    let randomNum = Math.floor((Math.random() * data.length))
    resultDisplay.innerText = data[randomNum];
}