function openGift() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("main");
    const music = document.getElementById("bgMusic");


    // Mulai musik
    music.volume = 0.5;

music.play().then(() => {
    console.log("Musik berjalan");
}).catch((error) => {
    console.log("Musik gagal diputar", error);
});


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
