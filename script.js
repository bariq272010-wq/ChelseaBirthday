function openGift() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("main");
    const music = document.getElementById("bgMusic");


    // Mulai musik
    music.play();


    // Animasi membuka hadiah
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



// Efek muncul saat halaman dibuka

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const elements = document.querySelectorAll(
            ".hero, .gallery, .letter, .closing"
        );


        elements.forEach((element) => {

            element.style.opacity = "0";

        });


    }
);



// Klik gambar untuk memperbesar

const images = document.querySelectorAll(".card img");


images.forEach((img)=>{

    img.addEventListener(
        "click",
        ()=>{

            img.classList.toggle("zoom");

        }
    );

});
