const cardArray = [
    {
        name: 'fries', 
        img: 'images/fries-2.png',
    },
    {
        name: 'cheeseburger', 
        img: 'images/cheeseburger-2.png',
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog-2.png',
    },
    
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake', 
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza', 
        img: 'images/pizza.png',
    },
    {
        name: 'fries', 
        img: 'images/fries-2.png',
    },
    {
        name: 'cheeseburger', 
        img: 'images/cheeseburger-2.png',
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog-2.png',
    },
    
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake', 
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza', 
        img: 'images/pizza.png',
    },
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', "images/blank.png")
    card.setAttribute('data-id', i)
    gridDisplay.appendChild(card)
    }

}

createBoard()