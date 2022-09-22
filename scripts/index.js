let openGallery = new Boolean(false);
gallery = document.querySelector('.gallery')
galleryOpenButton = document.getElementById('galleryOpenButton')
galleryCloseButton = document.getElementById('galleryCloseButton')
function menuFunction() {
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

function fotoFunction(){
    fotoPersoon = document.querySelector('.gallery')
    fotoPersoon.classList.remove('galleryTop')
    galleryOpenButton.style.display = "inline"
    galleryCloseButton.style.display = "none"
}

function logoFunction(){
    gallery.classList.remove('galleryTop')
    galleryCloseButton.style.display = "none"
}