const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        // alert("test")
        navLinks.forEach((link, index) => {
            // console.log(index);
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinkFade 1s  ${index / 7 + 1}s`;
            }
            
            
            
        });
    });
}

navSlide();

