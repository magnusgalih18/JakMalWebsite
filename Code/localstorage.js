function savevalue (){
    var phoneUserSave = document.getElementById("phoneUser").value;
    localStorage.setItem("phoneValue", phoneUserSave);
    var emailUserSave = document.getElementById("emaile").value;
    localStorage.setItem("emailValue", emailUserSave);
    var addressUserSave = document.getElementById("addressDeliv").value;
    localStorage.setItem("adddressUserValue", addressUserSave);
    var nameDropSave = document.getElementById("nameDropshipper").value;
    localStorage.setItem("nameDropValue", nameDropSave);
    var phoneDropSave = document.getElementById("phoneDropshipper").value;
    localStorage.setItem("phoneDropValue", phoneDropSave);
    var dropshipFee2 = dropshipFee;
    localStorage.setItem("dropshipFeeSave", dropshipFee2);
    var totalPrice2 = totalPrice;
    localStorage.setItem("totalPriceSave2", totalPrice2);
    // var shippingSave2 = shipping;
    // localStorage.setItem("shippingMethod2", shippingSave2);
    // var delivSave2 = deliv;
    // localStorage.setItem("delivMethod2", delivSave2);
}