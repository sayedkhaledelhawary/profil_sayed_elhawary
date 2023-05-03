
let mnBody = document.querySelector('#moon-body');
mnBody.onclick = () => {
    mnBody.classList.toggle("fa-moon")
    if(mnBody.classList.contains("fa-moon")){
        document.body.classList.add('active');
    }else{
    document.body.classList.remove('active')
    }
}
    
         





let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
    menu.onclick = () => {
        menu.classList.toggle('fa-times')
        header.classList.toggle('active')
        
    };





         const sr = ScrollReveal ({
          origin: 'top',
          distance: '85px',
          duration: 2500,
          reset: true,

       })

        
   
      sr.reveal ('.home,.box-continer', {delay: 400});
     

    
