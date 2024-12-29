let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let logoTitle = document.querySelector('.logo-title');
let container2 = document.querySelectorAll('.container2')


//Oberserver



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






window.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (idx + 1) * 400)

        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx) =>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                
                }, (idx + 1) * 50)
            })
        }, 2000);
        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2300)
    })
})





//Reloads webpage
logoTitle.addEventListener('click', ()=>{
    location.href = "\index.html"
}
)




