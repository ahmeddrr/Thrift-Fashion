const clothData = [
   
    {
     cloth_image : "assets/images/products/product-1.jpg",
     category : "Men's Clothing",
     name : "Linen-blended dress",
     now_price : "PKR 5000",
     was_price : "PKR 6600",
     availabilty: "25% on Sale"
    
    },
    {
     cloth_image : "assets/images/products/product-12.jpg",
     category : "Dress",
     name : "Linen-blended dress",
     now_price : "PKR 5000",
     was_price : "PKR 6600",
     availabilty: "Out of Stock"
    
    },
    {
     cloth_image : "assets/images/products/product-1.jpg",
     category : "Dress",
     name : "Linen-blended dress",
     now_price : "PKR 5000",
     was_price : "PKR 6600",
     availabilty: "25% on Sale"
    
    },
    {
     cloth_image : "assets/images/products/product-8.jpg",
     category : "Dress",
     name : "Linen-blended dress",
     now_price : "PKR 5000",
     was_price : "PKR 6600",
     availabilty: "25% on Sale"
    },
    
    {
     cloth_image : "assets/images/products/product-12.jpg",
     category : "Dress",
     name : "Linen-blended dress",
     now_price : "PKR 5000",
     was_price : "PKR 6600",
     availabilty: "25% on Sale"
    },
    
    {
     cloth_image : "assets/images/products/product-8.jpg",
     category : "Dress",
     name : "Linen-blended dress",
     now_price : "PKR 5000",
     was_price : "PKR 6600",
     availabilty: "25% on Sale"
    }
    
    



    
    ]
    document.getElementById('container').innerHTML = ` 
    <div class="row">
                    <div class="col-lg-12">
                        <h2 class="title">Recent Arrivals (Thrifted)</h2><!-- End .title -->
                        <div class="products-container mb-7">
                        <div class="row justify-content-center">
           ${clothData.map(function(clothData){

                return `
                <div class="col-9 col-md-4">
                                    <div class="product product-4">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">${clothData.availabilty}</span>
                                            
                                            <a href="product.html">
                                                <img src="${clothData.cloth_image}" alt="Product image" class="product-image">
                                                <img src="${clothData.cloth_image}" alt="Product image" class="product-image-hover">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div><!-- End .product-action -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                            </div><!-- End .product-action -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">${clothData.category}</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">${clothData.name}</a></h3><!-- End .product-title -->

                                            <div class="product-price">
                                                <span class="new-price">Now  ${clothData.now_price}</span>
                                                <span class="old-price">Was  ${clothData.was_price}</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->
                                    </div><!-- End .product -->
                                </div>
                
                                
                                `
                                
                                
                            }).join('')}             
                            
                            </div>
                            </div>
                            </div>
                           
    `
        var  username =  sessionStorage.getItem("name");
        const session_user = document.getElementById("session_user").innerHTML = username ;
      
 
 
 
 