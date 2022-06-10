function sort(elem){
    page=document.getElementById("page");
    product=page.querySelectorAll("[name^=Product]");
    productvis=page.querySelectorAll("[id^="+elem+"]");
    product.forEach(el => {
        el.setAttribute('style','display: none');
    });
    productvis.forEach(el => {
        el.setAttribute('style','display:""');
    });
    button=`<button class="btn btn-outline-dark" onclick="clearsort()">
    <i class="bi-bag me-1"></i>
    `+elem+`
    <i class="bi-x-lg me-1"></i>
    </button>`
    document.getElementById("category").innerHTML=button;
}

function clearsort(){
    page=document.getElementById("page");
    product=page.querySelectorAll("[name^=Product]");
    product.forEach(el => {
        el.setAttribute('style','display:""');
    });
    document.getElementById("category").innerHTML="";
}

var l=8;

const search = () => {
    var searchbox = document.getElementById("searched").value.toUpperCase();
    var pname=document.getElementsByName("pname");
    var productlist=document.getElementById("page");
    var product=productlist.querySelectorAll("[name^=Product]");
    console.log(product);
    for(let i = 0;i<pname.length;i++){
        let match = pname[i].innerHTML;
        if(match){
            if(match.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";
            }
        }
    }
}