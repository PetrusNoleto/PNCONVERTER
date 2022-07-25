    const _fontSizeDefault = 16
    const $button = document.querySelector(".btn-converter")
    $button.addEventListener("click", converter())


    function converter(){
    
    let $fontSize = document.querySelector(".getfontsize").value
    let $pxvalue = document.querySelector(".getPixels").value
    let $calcresult = document.querySelector(".resulttxt").value 
    let txt = "Rem";
    

        if($fontSize == _fontSizeDefault){
            let _calcFontSizeDefault = Number($pxvalue / _fontSizeDefault) 
            let _result =  _calcFontSizeDefault


        } else{
            let _remcalc = Number($pxvalue / $fontSize)
            

        }

    


    

}
