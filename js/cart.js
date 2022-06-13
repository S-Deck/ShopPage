var cart = JSON.parse(localStorage.getItem("cart"));

function show(){
    menu = "<table id=tab class=w-100><thead><tr><td></td><td>Name</td><td>Price</td></thead><tbody>";
    let sumprice=0;
    for(let i=0;i<cart.length;i++) { 
        let itemprice=parseInt(cart[i].price.slice(1))*parseInt(cart[i].quantity);
        menu+=`<tr id="+i+"><td><img style="border-radius:5px; width: 50px; height:50px"src="`+cart[i].img+`" style="" alt=... /></td>`+
        "<td id=c_"+i+">"+cart[i].name+"</br>Quantity: "+cart[i].quantity+"</td><td id=c_"+i+">$"+itemprice+
        `<td><button class="btn btn-outline-danger" onclick=clearelem("`+i+`")>X</button></td></tr>`;
        sumprice+=itemprice;
    }
    menu += "</tbody></table></br>";
    menu += `<div class="d-flex flex-row-reverse ms-7"><button class="btn btn-outline-dark">Total: $`+sumprice+`.00 </button></div>`;
    document.getElementById("cartmenu").innerHTML=menu;
}

function clearelem(i){
    if(cart[i].quantity>1){
        cart[i].quantity--;
    }
    else{
        cart.splice(i,1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if(cart.length==0){
        window.location.href='index.html';
    }
    show();
}

document.addEventListener("DOMContentLoaded", function() {
    show();
})

function checkField(field_id, objectRegex) {
    var objectfield = document.getElementById(field_id);
    if(!objectRegex.test(objectfield.value)) return (false);
    else return (true);
}

function checkRadio(radio_name){
    var object=document.getElementsByName(radio_name);
    for (i=0;i<object.length;i++){ 
        chosen=object[i].checked;
        if (chosen) return true; 
    }
    return false;
}
    
function check(){
    var item={};
    var ok=true; 
    objectName = /^[a-zA-Z]{2,20}$/;
    objectLname = /^[a-zA-Z]{2,20}$/; 
    objectEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    objectPhone = /^([1-9]{1})+([0-9]{8})$/;
    objectZipcode = /^[0-9]{5}$/;
    objectAddress= /^[a-zA-Z0-9/]{2,30}[\s-][a-zA-Z0-9/]{2,30}$/;
    objectCity= /^[a-zA-Z]{2,20}[\s-][a-zA-Z]{2,20}$/;

    if (!checkField("name",objectName)) { 
        ok=false;
        document.getElementById("name_error").innerHTML = "Error! Check your name!";
    }
    else {
        document.getElementById("name_error").innerHTML = "";
        item.name = document.getElementById('name').value;
    }

    if (!checkField("lname",objectLname)) { 
        ok=false;
        document.getElementById("lname_error").innerHTML = "Error! Check your last name!";
    }
    else{
        document.getElementById("lname_error").innerHTML="";
        item.lname = document.getElementById('lname').value;
    } 
    
    if(!checkField("email", objectEmail)) {
        ok=false;
        document.getElementById("email_error").innerHTML = "Error! Check your email!";
    }
    else{
        document.getElementById("email_error").innerHTML="";
        item.email = document.getElementById('email').value;
    }

    if(!checkField("phone", objectPhone)) {
        ok=false;
        document.getElementById("phone_error").innerHTML = "Error! Check your phone number!";
    }
    else{
        document.getElementById("phone_error").innerHTML="";
        item.phone = document.getElementById('phone').value;
    }
    
    if(!checkField("zipcode", objectZipcode)) {
        ok=false;
        document.getElementById("zipcode_error").innerHTML = "Error! Check your zipcode!";
    }
    else{
        document.getElementById("zipcode_error").innerHTML="";
        item.zipcode = document.getElementById('zipcode').value;
    }
    
    if(!checkField("address", objectAddress)) {
        ok=false;
        document.getElementById("address_error").innerHTML = "Error! Check your address!";
    }
    else{
        document.getElementById("address_error").innerHTML="";
        item.address = document.getElementById('address').value;
    }

    if(!checkField("city", objectCity)) {
        ok=false;
        document.getElementById("city_error").innerHTML = "Error! Check your city!";
    }
    else{
        document.getElementById("city_error").innerHTML="";
        item.city = document.getElementById('city').value;
    }
    
    if(!checkRadio("payment")){
        ok=false;
        document.getElementById("payment_error").innerHTML="Error! Check your payment method!";
    }
    else document.getElementById("payment_error").innerHTML="";

    if(!checkRadio("delivery")){
        ok=false;
        document.getElementById("delivery_error").innerHTML="Error! Check your delivery method!";
    }
    else document.getElementById("delivery_error").innerHTML="";

     if(ok == true){
        item.comment = document.getElementById('comment').value;
        var tab = document.getElementsByName('payment');
        var payment_result = "";
        for(let i=0; i<tab.length; i++){
            if(tab[i].checked){
                payment_result = tab[i].value;
                break;
            }
        }
        item.payment = payment_result;
        var tab2 = document.getElementsByName('delivery');
        var delivery_result = "";
        for(let i=0; i<tab2.length; i++){
            if(tab[i].checked){
                payment_result = tab[i].value;
                break;
            }
        }
        item.delivery = delivery_result;   
        localStorage.setItem(item.email, JSON.stringify(item)); 
    }
}

var but = document.getElementById("check");
but.addEventListener('click', function(){
    check();
});
