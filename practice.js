//Old Javascript

var names = ['Ed', 'John', 'Mike']
var counter = 10

//object literals 
// function getBook(title, author){
//     return{
//         title: title,
//         author: author
//     }
// }




//ES6

//const and let 
let newNames = ['Ed', 'John']
const ages = [1,2,3]


//string concatination 
let name = 'Ed'
console.log(`Hello ${name}`)

//object literals 
function getBook(title, author){
    return{
        title,
        author 
    }
}

const book = getBook('Harry Potter', 'JK')
console.log(book)


//object deconstruction 
const list = {
    title: 'Shopping List',
    items: ['Eggs', 'Milk']
}

const {title, items} = list;
console.log(title, items)


//arrow functions 
//gives you reference to "this" when working with multiple functions within the same object or eventListeners 
const sayLocation = (location) => {
    console.log(`My location is ${location}`)
}

sayLocation('Paris')



//default parameters to keep from crashing 
const add = (c = 1, d = 1) => {
    console.log(c+d)
}

add()
//2
add(4,6)
//10


//array functions 
const shoppingList = ['Milk', 'Cow', 'Eggs', 'Chicken']

shoppingList.forEach((product,index) => {
    console.log(`The index is ${index} and the product is ${product}`)
})

const newList = shoppingList.map(item => item + "new")
console.log(newList)

const filteredList = shoppingList.filter(item => {
    return item === 'Milk'
})


//constructor function - a function that lets us create an object
//extends and constructor and super 


class GroceryList{
    constructor(items, nr){
        this.items =  items
        this.nr = nr
    }
    sayList(){
        console.log(this.items)
    }
}

const myList = new GroceryList(['Milk', 'Choco'], 3)


class Product extends GroceryList{
    constructor(items, nr, amount, cost){
        super(items, nr)
        this.amount = amount
        this.cost = cost 
    }
}

const product = new Product(['Redbull, Chocolate'], 3, 2, 20)
console.log(product)



//Promises 

const prom = new Promise((resolve, reject) => {
    //Here is async code 
    setTimeout(() => {
        resolve(200)
    }, 2000)
})


prom.then(data => {
    console.log(data)
})





