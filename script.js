const lamp=document.querySelector('.lamp');
const light=document.querySelector('.lamp-light');

lamp.addEventListener('click', ()=>{

      if(light.classList.contains('on')){

        light.classList.remove('on');
        light.classList.add('off');



      }else{

        light.classList.remove('off');
        light.classList.add('on');
      }



});

const txt=document.querySelector('.lamp');
const text=document.querySelector('.lamp-text');

txt.addEventListener('click', ()=>{

      if(text.classList.contains('on')){

        text.classList.remove('on');
        text.classList.add('off');



      }else{

        text.classList.remove('off');
        text.classList.add('on');
      }



});