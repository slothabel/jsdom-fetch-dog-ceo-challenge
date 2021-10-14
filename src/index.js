// console.log('%c HI', 'color: firebrick')
let dogImages = []

document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
   .then(resp => resp.json())
//    .then(result => console.log(result.message));
   .then(function (result) {
    for (const element of result[message]) {
        addImage(element);
      };
       });
}

function addImage(image){
    // grab image container 
    let imageContainer = document.getElementById('dog-image-container')
    // add image to container
    imageContainer.innerHTML = `<img src=${image}/>`;
}