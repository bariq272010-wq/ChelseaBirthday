function openGift() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("main");


    opening.style.opacity = "0";


    setTimeout(() => {

        opening.style.display = "none";

        main.classList.remove("hidden");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });


    },800);


}


// Efek muncul ketika halaman dibuka

document.addEventListener(
"DOMContentLoaded",
()=>{


const cards = document.querySelectorAll(
".memory-card"
);


cards.forEach(card=>{


card.style.opacity="0";


card.style.transform=
"translateY(30px)";


});


});
