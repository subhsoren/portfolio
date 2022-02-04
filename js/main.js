// typing animation
var typed = new Typed(".typing", {
    strings: ["","Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
});

// Aside section
const nav = document.querySelector('.nav'),
   navList = nav.querySelectorAll("li"),
   totalNavList = navList.length,
   allSection = document.querySelectorAll(".section"),
   totalSection = allSection.length;
   for(let i =0; i < totalNavList; i++) {
    //    console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener('click', function() {
        // console.log(this);
        for (let j=0; j<totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
   }
   function showSection(element) {
       for(let i=0; i<totalSection; i++) {
           allSection[i].classList.remove("active");
       }
       const target = element.getAttribute("href").split("#")[1];
    //    console.log(target);
    document.querySelector("#" + target).classList.add("active");
   }
