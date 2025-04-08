const nav = document.querySelector('.nav')
const clasic = document.getElementById("clasica")
const medie = document.getElementById("medieval")

window.addEventListener('scroll', fixNav)

function fixNav(){
    if( window.scrollY > 180){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
}

clasic.addEventListener('mouseover',()=>{
    clasic.style.background= 'white'
    clasic.style.color='black'
    clasic.style.border = 'black'

})

clasic.addEventListener('mouseleave',()=>{
    clasic.style.background= 'black'
    clasic.style.color ='white'

})


medie.addEventListener('mouseover',()=>{
    medie.style.background= 'white'
    medie.style.color='black'
    

})

medie.addEventListener('mouseleave',()=>{
    medie.style.background= 'black'
    medie.style.color ='white'

})