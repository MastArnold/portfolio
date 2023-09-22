const navElement = document.querySelector(".ma-nav");
const windowHeight = window.innerHeight;
const headElement = document.querySelector(".head");
const profileElement = document.querySelector(".profile");
const formationElement = document.querySelector(".formation");
const formationArray = document.querySelectorAll(".formation-item");
const formationView = document.querySelector(".formation-view");
const formationViewBack = document.querySelector("#formation-view-back");
const experienceElement = document.querySelector(".experiencePro");
const experienceArray = document.querySelectorAll(".experience-item");

headElement.style.height = windowHeight + 'px';
profileElement.querySelector(".profile-contain").style.height = (windowHeight / 2) + 'px';
formationElement.style.minHeight = ((windowHeight / 2) + 150 ) + 'px';
experienceElement.style.minHeight = ((windowHeight / 2) + 150) + 'px';

//évènement
document.addEventListener('resize', ()=>{
    headElement.style.height = windowHeight + 'px';
    profileElement.querySelector(".profile-contain").style.height = (windowHeight / 2) + 'px';
    formationElement.style.minHeight = ((windowHeight / 2) + 150 ) + 'px';
    experienceElement.style.minHeight = ((windowHeight / 2) + 150) + 'px';
});

document.addEventListener('scroll', ()=>{
    if(window.scrollY >= 50){
        navElement.classList.add("sticky");
    }else{
        navElement.classList.remove("sticky");
    }
});

formationArray.forEach((formation)=>{
    formation.addEventListener('click', (e)=>{
        formation.classList.add('hide');
        setTimeout(()=>{
            formationView.classList.add("view");
        }, 400);
        setTimeout(()=>{
            formation.classList.remove('hide');
        }, 1200);
    });
});

formationViewBack.addEventListener('click', (e)=>{
    formationView.classList.remove("view");
    /*formationArray.forEach((value)=>{
        if(value.classList.contains("hide")){
            value.classList.remove("hide");
        }
    });*/
});

experienceArray.forEach((value)=>{
    value.addEventListener('click', ()=>{
        if(value.classList.contains("expanded")){
            value.classList.remove("expanded");
        }else{
            value.classList.add("expanded");
        }
    });
});