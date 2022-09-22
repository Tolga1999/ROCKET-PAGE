let openGallery = new Boolean(false);
gallery = document.querySelector('.gallery')
galleryOpenButton = document.getElementById('galleryOpenButton')
galleryCloseButton = document.getElementById('galleryCloseButton')

function menuFunction() {
    // gives true or false as value
    if(openGallery == false){
        gallery.classList.add('galleryTop')
        openGallery = true
        galleryOpenButton.style.display = "none"
        galleryCloseButton.style.display = "inline"
    }else{
        gallery.classList.remove('galleryTop')
        openGallery = false
        galleryOpenButton.style.display = "inline"
        galleryCloseButton.style.display = "none"
    }
}

// functie dat wordt gebruikt bij klik van gallery foto
function fotoFunction(){
    gallery.classList.remove('galleryTop')
    galleryOpenButton.style.display = "inline"
    galleryCloseButton.style.display = "none"
}

// functie dat wordt gebruikt bij klik van logo
function logoFunction(){
    gallery.classList.remove('galleryTop')
    galleryOpenButton.style.display = "inline"
    galleryCloseButton.style.display = "none"
}