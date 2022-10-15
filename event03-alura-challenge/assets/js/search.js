let coll = document.querySelector(".collapsible");
coll.addEventListener("click", function() {    
    var content = this.previousElementSibling;
    content.style.display = "block";    
    coll.remove();
})