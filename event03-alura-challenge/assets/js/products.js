let loadMore = document.querySelectorAll(".loadMoreButton");
let sizeWindow = parseInt(window.innerWidth);

function sizeOfWindow(sizeWindow) {  
  let products = document.querySelectorAll(".product");  
  for (let index = 0; index < products.length; index++) {
    let product = products[index].querySelectorAll(".no-show");     
    if (sizeWindow >= 1000) {    
      for (let index = 0; index < 6; index++) {
        product[index].classList.add("show");
        product[index].classList.remove("no-show");    
      }
    } else if (sizeWindow >= 700) {
      for (let index = 0; index < 4; index++) {                    
          product[index].classList.add("show");
          product[index].classList.remove("no-show");
      }    
    } else {
      for (let index = 0; index < 2; index++) {
          product[index].classList.add("show");
          product[index].classList.remove("no-show"); 
      }
    }    
  }
}

sizeOfWindow(sizeWindow);

function moreProduct() {  
  let products = document.querySelectorAll(".product"); 
  for (let i = 0; i < loadMore.length; i++) {  
    loadMore[i].addEventListener("click", function() {      
      let showing = products[i].querySelectorAll(".no-show");    
      console.log(showing);
      for (let index = 0; index < showing.length; index++) {
        showing[index].classList.add("show");
        showing[index].classList.remove("no-show");
      }
      loadMore[i].remove();
    });     
  }    
}
moreProduct();



