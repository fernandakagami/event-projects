let loadMore = document.querySelectorAll(".loadMoreButton");
let products = document.querySelectorAll(".product");
let sizeWindow = parseInt(window.innerWidth);

if (sizeWindow >= 1000) {  
  let fullSize = document.querySelectorAll(".no-show");
  for (let index = 0; index < 6; index++) {
    fullSize[index].classList.add("show");
    fullSize[index].classList.remove("no-show");    
  } 
  for (let i = 0; i < loadMore.length; i++) {
    loadMore[i].addEventListener("click", function() {
      let showing = products[i].querySelectorAll(".no-show");
      console.log(showing);
      for (let index = 6; index < showing.length; index++) {
        showing[index].classList.add("show");
        showing[index].classList.remove("no-show");
      }
      loadMore[i].remove();
    });     
  }    
} else {
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

var coll = document.querySelector(".collapsible");

coll.addEventListener("click", function() {    
    var content = this.previousElementSibling;
    content.style.display = "block";    
    coll.remove();
})


