





    const $button = document.querySelector(".btn-converter")
    $button.addEventListener("click", converter())


    function converter(){
    const _fontSizeDefault = 16
    let $fontSize = document.querySelector(".getfontsize").value
    let $pxvalue = document.querySelector(".getPixels").value
    let $calcresult = document.querySelector(".resulttxt").value 
    
    let _remcalc = Number($pxvalue / $fontSize)
    
    


    console.log(_remcalc)


}
