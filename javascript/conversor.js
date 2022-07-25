    
    const $button = document.querySelector(".btn-converter")
    $button.addEventListener("click", converter())
    
    function converter(){
        const _fontSizeDefault = 16
        let $fontSize = document.querySelector(".getfontsize").value
        let $pxvalue = document.querySelector(".getPixels").value
       
    

        if($fontSize == _fontSizeDefault){
            let _calcFontSizeDefault = Number($pxvalue / _fontSizeDefault) 
            let _result = _calcFontSizeDefault
            document.querySelector(".resulttxt").textContent = _result

        }
         else($fontSize != _fontSizeDefault) 
            let _remcalc = Number($pxvalue / $fontSize)
            document.querySelector(".resulttxt").textContent = (_remcalc)

        

    


    

}
