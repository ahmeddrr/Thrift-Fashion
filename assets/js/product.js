const products =
[

    {
        image : "assets/images/products/9.png",
        name : "Nunc",
        category : "Women",
        now_price : "PKR 5500",
        was_price : "PKR 4800",
        availability : "Out of stock"
    },
    {
        image : "assets/images/products/14.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/12.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/4.png",
        name : "Custom jacket",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/5.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/6.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/10.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/8.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    
    {
        image : "assets/images/products/man-1.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/man-8.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/man-7.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/product-12.jpg",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/sneaker-1.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/sneaker-2.png",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/product-1.jpg",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    },
    {
        image : "assets/images/products/product-8.jpg",
        name : "Nuna",
        category : "Men",
        now_price : "PKR 6000",
        was_price : "PKR 4800",
        availability : "New"
    }

   

]

document.getElementById("products").innerHTML = `

<p class="text-center  mb-2">Showing <strong>${products.length} of ${products.length}</strong> products </p>
<div class="row">
${products.map( function(products){

return `
<div class="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                                <div class="product">
                                    <figure class="product-media">
                                        <span class="product-label label-new">${products.availability}</span>
                                        <a href="product.html">
                                            <img src="${products.image}" alt="Product image" class="product-image">
                                        </a>

                                        

                                        <div class="product-action action-icon-top">
                                            <a href="#" class="btn-product btn-cart" id="cartbtn"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                        </div><!-- End .product-action -->
                                    </figure><!-- End .product-media -->

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">${products.category}</a>
                                        </div><!-- End .product-cat -->
                                        <h3 class="product-title" id ="product-name">
                                        <a href="product.html" class="names">${products.name}</a>
                                        </h3><!-- End .product-title -->
                                        <div class="product-price">
                                           ${products.now_price}
                                        </div><!-- End .product-price -->
                                       

                                        
                                    </div><!-- End .product-body -->
                                </div><!-- End .product -->
                            </div>

`


}).join('')}
</div>

`

