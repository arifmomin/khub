let menu_bar = document.querySelector('.menu_bar');

console.log(menu_bar)


window.addEventListener('scroll',()=>{
    let scrolling =this.scrollY


    if(scrolling > 100){
        menu_bar.classList.add('fixed_menu')
    }else{
        menu_bar.classList.remove('fixed_menu')
    }
})