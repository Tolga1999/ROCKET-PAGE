let openGallery = new Boolean(false);
function menuFunction() {
    gallery = document.querySelector('.gallery')
    galleryOpenButton = document.getElementById('galleryOpenButton')
    // gives true or false as value
    if(openGallery == false){
        gallery.classList.add('galleryTop')
        openGallery = true
        galleryOpenButton.style.display = "none"
    }else{
        gallery.classList.remove('galleryTop')
        openGallery = false
        galleryOpenButton.style.display = "inline"
    }
}

// HIER WORDT NOG AAN GEWERKT!!!
function fotoFunction(){
    fotoPersoon = document.querySelector('.gallery')
    fotoPersoon.classList.remove('galleryTop')
    galleryOpenButton.style.display = "inline"
}