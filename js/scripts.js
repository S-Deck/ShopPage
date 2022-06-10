var cart = JSON.parse(localStorage.getItem("cart"));
if(cart==null) cart=[];
document.getElementById("cartamount").textContent=cart.length;

function add(i){
    let item = {};
    item.name=document.getElementById("name"+i).textContent;
    item.price=document.getElementById("price"+i).textContent;
    item.img=document.getElementById("image"+i).src;
    console.log(item.img);
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
    document.getElementById("cartamount").textContent=cart.length;
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
            menu+=`<tr id="+i+"><td><img style="border-radius:5px; width: 50px; height:50px"src="`+cart[i].img+`" style="" alt=... /></td>`+
            "<td id=c_"+i+">"+cart[i].name+"</td><td id=c_"+i+">"+cart[i].price+
            `<td><button class="btn btn-outline-danger" onclick=clearelem("+i+")>X</button></td></tr>`;
            sumprice+=parseInt(cart[i].price.slice(1));
        }
        menu += "</tbody></table></br>";
        menu += `<div class="d-flex flex-row ms-2">
                <button class="btn btn-outline-dark" onclick="window.location.href='cart.html'"><i class="bi-cart-check"></i></button>
                <button class="btn btn-outline-dark ms-2">To pay: $`+sumprice+`.00 </button></div>`
                
    }
    document.getElementById("cartmenu").innerHTML=menu;
}

function clearelem(i){
    cart.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cartamount").textContent=cart.length;
    show();
}

var but = document.getElementById("cartbut");
but.addEventListener('click', function(){
    show();
});

$(document).ready(() => {
    $('ul#cartmenu').on('click', function (e) {
        e.stopPropagation();
    });
});