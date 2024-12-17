function convert(){
    let value = Number(document.getElementById("centimeter").value);
    let inch = value/2.54;
    let result = document.getElementById("result");
    result.innerHTML = inch.toFixed(2) + "inches";
}