const profileElementScroll = document.querySelector(".profile").scrollHeight;
const formationElementScroll = document.querySelector(".formation").scrollHeight;
const experienceElementScroll = document.querySelector(".experiencePro").scrollHeight;
const competenceElementScroll = document.querySelector(".competence").scrollHeight;

let showCompetence = false;
let showCompetenceMobile = false;
let showCompetenceLog = false;
let showRealisation = false;

document.addEventListener('scroll', ()=>{
    if(window.scrollY >= (profileElementScroll - 280)){
        profileElement.classList.add('show');
    }

    if(window.scrollY >= 1640 && !showCompetence){
        new Chart(ctx, {
            type: 'radar',
            data: dataRadar,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
        });
        showCompetence = true;
    }

    if(window.scrollY >= 1926 && !showCompetenceMobile){
      new Chart(ctx_mobile, {
        type: 'radar',
        data: dataRadarMobile,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      showCompetenceMobile = true;
    }

    if(window.scrollY >= 2207 && !showCompetenceLog){
      new Chart(ctx_log, {
        type: 'radar',
        data: dataRadarLog,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      showCompetenceLog = true;
    }

    if(window.scrollY >= 2485 && !showRealisation){
      realisationArray.forEach((realisation)=>{
        realisation.classList.add("show");
      });
      showRealisation = true;
    }
});