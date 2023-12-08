function conversorPxToRem(){
    const fontSizeDefault = 16
    let $PxToRemfontSize = document.querySelector(".conversorPxToRemGetFontSize").value
    let $PxToRemPxvalue = document.querySelector(".conversorPxToRemGetPixels").value
    let $getClassForResult = document.querySelector(".mainConversorResult").classList    
    if($PxToRemfontSize == fontSizeDefault){
            let _calcFontSizeDefault = Number($PxToRemPxvalue / fontSizeDefault) 
            let _result = _calcFontSizeDefault
            $getClassForResult.remove(".hidden")
            document.querySelector(".conversorPxToRemResult").textContent = (`${_result}rem`)
        }
        else($PxToRemfontSize != fontSizeDefault) 
            let _remcalc = Number($PxToRemPxvalue / $PxToRemfontSize)
            $getClassForResult.remove("hidden")
            document.querySelector(".conversorPxToRemResult").textContent = (`${_remcalc}rem`)    
        if($PxToRemfontSize, $PxToRemPxvalue == 0){
            $getClassForResult.remove("hidden")
            document.querySelector(".conversorPxToRemResult").textContent = ("")   
        }
}
