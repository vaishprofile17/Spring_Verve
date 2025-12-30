/*Each time user clicks Add to Cart
Product gets pushed into cart array */

const cart=[]

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
    ],
    Jwellery:[
        {name:"ear rings",price:120},
        {name:"necklace",price:250},
        {name:"bracelet",price:100}
    ],
    Shoes:[
        {name:"sports shoes",price:1500},
        {name:"leather boots",price:3000}
    ],
    Furniture:[
        {name:"acrylic makeup organizer",price:450},
        {name:"foldable shoe rack",price:600}
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
        alert(`you clicked on ${category.name}`)
        productSection.innerHTML=""

        const selectedProducts=products[category.name]

        if(!selectedProducts)return
        selectedProducts.forEach(function(product){
           const  productDiv=document.createElement("div")
           productDiv.className="product-card"

           const title=document.createElement("h3")
           title.innerText=product.name

           const price=document.createElement("p")
           price.innerText=`₹${product.price}`

           const btn=document.createElement("button")
           btn.innerText="Add to Cart"

           btn.addEventListener("click", function(){
              cart.push({
                 name: product.name,
                 price: product.price
            })

                console.log("Cart length:", cart.length)
                console.log("First item name:", cart[0]?.name)
                console.log("Full cart:", JSON.stringify(cart))

    alert(`${product.name} added to cart`)
})


           productDiv.appendChild(title)
           productDiv.appendChild(price)
           productDiv.appendChild(btn)

           productSection.appendChild(productDiv)
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


