const onerem = 0.0625;
const texto = "O valor em rem é: ";
const $convbtn = document.querySelector(".confirmbtn")

$convbtn.addEventListener("click", function converter(){

    let pxvalue = document.querySelector(".pxvalue").value
    let valueconvert = Number(pxvalue * onerem)
    document.querySelector(".resultado").textContent =  valueconvert
} )
