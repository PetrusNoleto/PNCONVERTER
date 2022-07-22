   const $openresultcard = document.querySelector(".confirmbtn")
   const $cardresult = document.querySelector(".resultacount")
   const $closeresultcard = document.querySelector(".close-icon")



   function openfunctions() {
        opencard()


   }



   
            $openresultcard.addEventListener("click",function opencard(){

                $cardresult.classList.remove("hidden")



            })
            $closeresultcard.addEventListener("click",function closecard(){

                $cardresult.classList.add("hidden")



            })

           