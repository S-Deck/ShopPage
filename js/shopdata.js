document.addEventListener("DOMContentLoaded", function() {
    fetch("./data/shopdata.json")
    .then( response => {return response.json();})
    .then( dane => {
        output="";
        for(let i=0;i<8;i++){
            document.getElementById("name"+(i+1)).innerHTML = dane[i].title; 
            document.getElementById("price"+(i+1)).innerText = "$"+dane[i].price+".00"; 
        }
        
    })

})