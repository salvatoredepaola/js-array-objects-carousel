const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const first = ` <img id="visible" class="slide" src="${images[0].image}" alt="${images[0].text}" /></img>  `;
document.getElementById("slider").innerHTML = first;

let currentSlide = 1;

console.log(`la slide corrente é ${currentSlide}`);
// console.log(`l'immagine corrente é ${images[0].image}`);
// document.getElementById("title").innerText = images[0].title;
// document.getElementById("text").innerText = images[0].text;

document.getElementById("btnNext").addEventListener("click", function(){
    if (currentSlide < images.length) {
        currentSlide++;
        console.log(`la slide corrente é ${currentSlide}`);
        const currentImg = images[currentSlide-1];
        console.log(`l'immagine corrente é ${currentImg.image}`);
        document.getElementById("visible").src = currentImg.image;
        document.getElementById("title").innerText = currentImg.title;
        document.getElementById("text").innerText = currentImg.text;
        if (currentSlide >= images.length) {
            currentSlide = 0
        }
    }

})

document.getElementById("btnPrev").addEventListener("click", function(){
    if (currentSlide <= 1) {
        currentSlide = images.length+1;
    }
    if (currentSlide > 1) {
        currentSlide--;
        console.log(`la slide corrente é ${currentSlide}`);
        const currentImg = images[currentSlide-1];
        console.log(`l'immagine corrente é ${currentImg.image}`);
        document.getElementById("visible").src = currentImg.image;
        document.getElementById("title").innerText = currentImg.title;
        document.getElementById("text").innerText = currentImg.text;

    }
})

document.getElementById("play").addEventListener("click", play);
document.getElementById("stop").addEventListener("click", stop);
var tempo;

function play() {

    clearInterval(tempo)
    tempo = setInterval(play, 1 * 1000);

    if (currentSlide < images.length) {
        currentSlide++;
        console.log(`la slide corrente é ${currentSlide}`);
        const currentImg = images[currentSlide-1];
        console.log(`l'immagine corrente é ${currentImg.image}`);
        document.getElementById("visible").src = currentImg.image;
        document.getElementById("title").innerText = currentImg.title;
        document.getElementById("text").innerText = currentImg.text;
        if (currentSlide >= images.length) {
            currentSlide = 0
        }
    }
}

function stop() {
    clearInterval(tempo)
}