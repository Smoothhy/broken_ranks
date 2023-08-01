       
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
            OpenDialog[1] = document.querySelector(".czempiony");
            OpenDialog[2] = document.querySelector(".sety");
            
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
