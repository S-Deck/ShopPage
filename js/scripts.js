var cart = JSON.parse(localStorage.getItem("cart"));
if(cart==null) cart=[];
document.getElementById("cartamount").textContent=cart.length;

function add(i){
    let item = {};
    item.name=document.getElementById("name"+i).textContent;
    item.price=document.getElementById("price"+i).textContent;
    console.log(item.name);
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
        menu = "<table id=tab class=w-100><thead></thead><tbody>";
        for(let i=0;i<cart.length;i++) { 
            menu+="<tr id="+i+"><td><img style=border-radius:5px src=https://dummyimage.com/90x60/000/fff alt=... /></td>"+
            "<td id=c_"+i+">"+cart[i].name+"</td><td id=c_"+i+">"+cart[i].price+
            `<td><button class="btn btn-outline-danger" onclick=clearelem("+i+")>X</button></td></tr>`;
        }
        menu += "</tbody></table>";
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
    $('ul.dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });
});
