function savevalue2 (){
    var shippingSave2 = shipping;
    localStorage.setItem("shippingMethod2", shippingSave2);
    var delivSave2 = deliv;
    localStorage.setItem("delivMethod2", delivSave2);
    var shipmentPrice = sv_price;
    localStorage.setItem("shipmentTotal", shipmentPrice);
    var pyMethod_IdSave = paymenmethod_id;
    localStorage.setItem("pyMethodValue", pyMethod_IdSave);
}