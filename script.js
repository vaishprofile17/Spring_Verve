const categories=[
    {
        name:"Tops",
        image:"images/tops.jpg"
    },
    {
        name:"Bottoms",
        image:"images/bottoms.jpg"
    },
    {
        name:"Jwellery",
        image:"images/jwellery.jpg"
    },
    {
        name:"Shoes",
        image:"images/shoes.jpg"
    },
    {
        name:"Furniture",
        image:"images/furniture.jpg"
    },
    {
        name:"Books",
        image:"images/books.jpg"
    }
]


// Why products = object of arrays
/*Because:
Products belong to a category
We want direct access
We don’t want to loop everything every time*/
const products={
    Tops:[
        {name:"floral crop Top",price:499},
        {name:"oversized shirt",price:699}
    ],
    Bottoms:[
        {name:"denim Jeans",price:1299},
        {name:"pleated skirt",price:799}
    ],
    Books:[
        {name:"classic Novel",price:299},
        {name:"Self Help Bool",price:399}
    ]
}
/*“I avoided hardcoding product categories in HTML.
I used JavaScript objects and dynamically rendered UI elements, including background images, using DOM manipulation.”*/
const shopSection=document.getElementById("shopSection")
const productSection=document.getElementById("productsSection")

categories.forEach(function(category){
    const box=document.createElement("div")
    box.className="box"

    // implemented interactive UI elements using JavaScript event listeners.
    box.addEventListener("click",function(){
        alert(`you clicked on $(category.name)`)
        productSection.innerHTML=""

        const selectedProducts=products[category.name]

        if(!selectedProducts)return
        selectedProducts.forEach(function(product){
            const p=document.createElement("p")
            p.innerText=`${product.name}- ₹${product.price}`
            productSection.appendChild(p)
        })
    })

    const img=document.createElement("div")
    img.className="img"
    img.style.backgroundImage=`url(${category.image})`

    const name=document.createElement("p")
    name.innerText=category.name

    box.appendChild(img)
    box.appendChild(name)

    shopSection.appendChild(box)
})


