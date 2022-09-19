function menuFunction(){
    let gallery = document.getElementById("gallery")
    if( gallery.style.display !== "none"){
        gallery.style.display = "none"
    }else{
        gallery.style.display = "flex"
    }
}