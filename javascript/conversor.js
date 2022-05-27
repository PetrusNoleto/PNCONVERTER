const onerem = 0.063;
const clear = 0;
const texto = "O valor em rem é: ";
function converter() {
    var pxvalue = document.getElementById('cnv-input').value;
    var valueconvert = Number(pxvalue * onerem);
    document.getElementById("cvn-result").innerHTML =  valueconvert;
}
    function limpar(){
        document.getElementById("cvn-result").innerHTML = clear;
        document.location.reload(true);

}
