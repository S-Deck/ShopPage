var cart = JSON.parse(localStorage.getItem("cart"));
if(cart==null) cart=[];

function cartrefresh(){
    let cartamount=0;
    for(let j=0;j<cart.length;j++){
        cartamount+=cart[j].quantity;
    }
    document.getElementById("cartamount").textContent=cartamount;
}

function add(i){
    let item = {};
    let repeat = false;
    let repeatnum=0;
    for(let j=0;j<cart.length;j++){
        if(i==cart[j].id){
            repeat = true;
            repeatnum=j;
        }
    }
    if(repeat){
        cart[repeatnum].quantity++;
    }
    else{
        item.id=i;
        item.name=document.getElementById("name"+i).textContent;
        item.price=document.getElementById("price"+i).textContent;
        item.img=document.getElementById("image"+i).src;
        item.quantity=1
        cart.push(item);
    }
    cartrefresh();
    localStorage.setItem("cart",JSON.stringify(cart));  
}

function show(){
    let menu="";
    if(cart.length==0){
        menu = "<li class=p-2>Cart is empty</li>"
    }
    else{
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
        menu += `<div class="d-flex flex-row ms-2">
                <button class="btn btn-outline-dark" onclick="window.location.href='cart.html'"><i class="bi-cart-check"></i></button>
                <button class="btn btn-outline-dark ms-2">Total: $`+sumprice+`.00 </button>
                <button class="btn btn-outline-dark ms-2" onclick="clears()"><i class="bi-x"></i></button></div>`
                
    }
    document.getElementById("cartmenu").innerHTML=menu;
}

function clearelem(i){
    if(cart[i].quantity>1){
        cart[i].quantity--;
    }
    else{
        cart.splice(i,1);
    }
    cartrefresh();
    localStorage.setItem("cart", JSON.stringify(cart));
    show();
}

function clears(){
    localStorage.clear();
    window.location.reload();
}

var but = document.getElementById("cartbut");
but.addEventListener('click', function(){
    show();
});

$(document).ready(() => {
    cartrefresh();
    $('ul#cartmenu').on('click', function (e) {
        e.stopPropagation();
    });
});