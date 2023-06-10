       
       /* NAVIGATION ON MOBILES */
       let header_nav_btn = document.querySelector("#nav-btn");
        let header_nav = document.querySelector("#header-nav");



        window.addEventListener("resize", ChangeWidth);
        function ChangeWidth(){
            if(window.screen.width > 700){
                header_nav.style.right = "0px";
            }

        }

        header_nav_btn.onclick = () =>{
            if(header_nav.style.right == "0px"){
                header_nav.style.right = "-300px";
                header_nav_btn.src = "img/menu.png";
            } else{
                header_nav.style.right = "0px";
                header_nav_btn.src = "img/close.png";
            }

        }

/* DIALOG */

    const OpenDialog = []

            OpenDialog[0] = document.querySelector(".synergi");
            OpenDialog[1] = document.querySelector(".bossy");
            OpenDialog[2] = document.querySelector(".czempiony");
            OpenDialog[3] = document.querySelector(".sety");
            
            const CloseDialog = document.querySelector(".close-dialog");
            const Dialog = document.querySelector(".dialog");


            for (let i = 0; i < OpenDialog.length; i++){
                OpenDialog[i].addEventListener("click", () => {
                    
                    Dialog.showModal();

                });
            };
            CloseDialog.addEventListener("click", () =>{
                Dialog.close();
                
            })




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
                  window.addEventListener("resize", ChangeBoxShadow);

                  function ChangeBoxShadow(x){
                    for(let j = 0; j < Overflow.length; j++){
                        if(isOverflowing(Overflow[j]) == false){
                            Overflow[j].style.boxShadow = "none";
                        }
                  }
                  }
