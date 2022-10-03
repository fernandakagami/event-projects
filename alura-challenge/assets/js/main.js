function myFunction() {
    var a = document.getElementsByClassName("show");
    for (var i = 0; i < a.length; i++) {
      a[i].style.display = "block";
    }  
   
    var button = document.getElementsByClassName("loadMoreButton");
    button[0].remove();  
}

//var showing = document.getElementsByClassName("show");
//var button = document.getElementsByClassName("loadMoreButton");
//var u;

//for (var i = 0; i < showing.length; i++) {
//    button[0].addEventListener("click", function() {    
//        if (showing[i].style.display === "none") {
//            showing[i].style.display = "block";            
//            button[0].remove();  
//        }
//});
//}



var coll = document.getElementsByClassName("collapsible");
var i;

coll[0].addEventListener("click", function() {    
    var content = this.previousElementSibling;
    content.style.display = "block";    
    coll[0].remove();
})
