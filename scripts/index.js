let openGallery = new Boolean(false);
function menuFunction() {
    gallery = document.querySelector('.gallery')
    galleryOpenButton = document.getElementById('galleryOpenButton')
    galleryCloseButton = document.getElementById('galleryCloseButton')
    // gives true or false as value
    if(openGallery == false){
        gallery.classList.add('galleryTop')
        openGallery = true
        galleryCloseButton.style.display = "inline"
    }else{
        gallery.classList.remove('galleryTop')
        openGallery = false
        galleryOpenButton.style.display = "inline"
        galleryCloseButton.style.display = "none"
    }
}

// HIER WORDT NOG AAN GEWERKT!!!
function fotoFunction(){
    fotoPersoon = document.querySelector('.gallery')
    fotoPersoon.classList.remove('galleryTop')
    galleryOpenButton.style.display = "inline"
    galleryCloseButton.style.display = "none"
}