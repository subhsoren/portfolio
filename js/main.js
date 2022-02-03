// typing animation
var typed = new Typed(".typing", {
    strings: ["","Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// Aside section
const nav = document.querySelector('.nav'),
   navList = nav.querySelectorAll("li"),
   totalNavList = navList.length;
   for(let i =0; i < totalNavList; i++) {
    //    console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener('click', () => {
        // console.log(this);
        for (let j=0; j<totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
   }
   function showSection(element) {
       console.log(element);
   }
