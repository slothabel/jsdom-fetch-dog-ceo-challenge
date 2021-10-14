// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    // loadImages();
    loadBreeds();
});

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
   .then(resp => resp.json())
//    .then(result => console.log(result.message));
   .then(result => addImage(result) 
       );
}

function addImage(result){
    // grab the div to hold images
    let imageContainer = document.getElementById('dog-image-container')
        //for (each image) inside of result.message
        for (const image of result.message) {
            //create image tags inside iteration to hold each image
            let newImg = document.createElement('img')
            //add current iterated url to the new image tag
            newImg.src = `${image}`;
            // add completed img tags to imagecontainer
            //add image tag, and then each src would be the images im iterating
            imageContainer.appendChild(newImg)
        }
}

function loadBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    //    .then(result => console.log(result));
    .then(result => addBreeds(result.message) 
    );
}

function addBreeds(result){
    let dogList = document.getElementById('dog-breeds')
    let ul = document.createElement('ul')
    dogList.appendChild(ul)
    // iterating with 'in' instead of 'of' because the fetch results were strings and not an object
    // 'of' is for iterating thru objects and 'in' is for arrays
        for (const breed in result) {
            let li = document.createElement('li')
            li.innerHTML = `${breed}`;
            ul.appendChild(li)
            li.addEventListener('click', changeColor);
        }
}

function changeColor(event){
    event.target.style.color = 'red';
}