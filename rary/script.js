 /* CHECK IF OVERFLOW */

 const Overflow = [];

 Overflow[0] = document.querySelector("#rary_herszt");
 Overflow[1] = document.querySelector("#rary_krzyzak");
 Overflow[2] = document.querySelector("#rary_ichtion");
 Overflow[3] = document.querySelector("#rary_ropucha");
 Overflow[4] = document.querySelector("#rary_babadek");
 Overflow[5] = document.querySelector("#rary_geomorph");
 Overflow[6] = document.querySelector("#rary_duch-ognia");
 Overflow[7] = document.querySelector("#rary_duch-zimna");
 Overflow[8] = document.querySelector("#rary_duch-energii");
 Overflow[9] = document.querySelector("#rary_gregorius");
 Overflow[10] = document.querySelector("#rary_ghadira");
 Overflow[11] = document.querySelector("#rary_niedzwiedz");
 Overflow[12] = document.querySelector("#rary_wladca-marionetek");


 function isOverflowing(element) {
     return element.scrollWidth > element.clientWidth;
   }
   
   function BoxShadow(){
       for(let j = 0; j < Overflow.length; j++){
             if(isOverflowing(Overflow[j]) == true){
                 Overflow[j].style.boxShadow = "inset -42px -2px 21px -12px rgba(255, 255, 255, 0.7)";
             }
       }

   }
   


   
   window.addEventListener("resize", BoxShadow);
   window.addEventListener("load", BoxShadow);
   window.addEventListener("resize", ChangeBoxShadow);
   
   function ChangeBoxShadow(x){
       for(let j = 0; j < Overflow.length; j++){
           if(isOverflowing(Overflow[j]) == false){
               Overflow[j].style.boxShadow = "none";
            }
        }
    }
    
