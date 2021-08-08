let header=document.querySelector(".header");
let back=document.querySelector(".fixed__back");
let aboutMe=document.querySelector(".about__me");
let options=document.querySelectorAll(".header__right>*");
let skills=document.querySelector(".Skill__container");
let home=document.querySelector(".main__container");
let projects=document.querySelector(".projects__container");
window.onscroll=()=>{
    if(window.scrollY>20){
        header.style.backgroundColor="rgba(26, 26, 26, 0.541)";
       
    }else{
        header.style.backgroundColor="";
    }
    if(window.scrollY>1670){
     back.style.backgroundImage=`url(${"https://www.netclipart.com/pp/m/139-1392892_employee-clipart-computer-worker-install-aol-desktop-gold.png"})`
    }else if(window.scrollY<1670){
        back.style.backgroundImage=`url(${"https://sm.pcmag.com/pcmag_in/gallery/6/6-ways-to-/6-ways-to-improve-your-dual-monitor-setup_h96r.jpg"})` 
    }
    if(window.scrollY>3100){
        back.style.backgroundImage=`url(${"https://c0.wallpaperflare.com/preview/841/708/39/adult-business-busy-character.jpg"})` 
    }
}
for(let i=0;i<options.length;i++){
    options[i].addEventListener("click",(e)=>{
          let classes=e.target.id;
          if(classes==="home"){
                home.scrollIntoView({behavior:"smooth"});
          }else if(classes==="About"){
            //   alert(classes);

              aboutMe.scrollIntoView({behavior:"smooth"});
          }else if(classes==="Skills"){
             skills.scrollIntoView({behavior:"smooth"});
          }else if(classes="Projects"){
              projects.scrollIntoView({behavior:"smooth"});
          }
    })
}