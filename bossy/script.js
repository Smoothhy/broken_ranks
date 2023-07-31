


function UrlChanged(){

   document.querySelectorAll(".boss-section").forEach(function($element){
      if(window.location.hash){
         $element.classList.add("section-is-hidden");
         /* BossSection.classList.add("section-is-hidden"); */
         let CurrentBoss = location.hash.split("#")[1];
         console.log(CurrentBoss);  
         if(CurrentBoss){
            let ActiveBoss = document.getElementById(CurrentBoss);
            ActiveBoss.classList.remove("section-is-hidden");
            ActiveBoss.classList.add("section-is-single");
            
            if(ActiveBoss.classList.contains("section-is-single")){
               ActiveBoss.querySelector(".przedstawienie-bossa-unactive").classList.add("hidden");
               ActiveBoss.querySelector(".przedstawienie-bossa-active").classList.remove("hidden");
            }
         }
      }else{
         $element.classList.remove("section-is-hidden");
         $element.classList.remove("section-is-single");
         $element.querySelector(".przedstawienie-bossa-unactive").classList.remove("hidden");
         $element.querySelector(".przedstawienie-bossa-active").classList.add("hidden");
      }
         
        
   })
      
          
}



window.addEventListener("hashchange", UrlChanged);
window.addEventListener("DOMContentLoaded", UrlChanged);
