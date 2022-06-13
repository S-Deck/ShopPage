document.addEventListener("DOMContentLoaded", function() {
    fetch("./data/shopdata.json")
    .then( response => {return response.json();})
    .then( dane => {
        output="";
        for(let i=0;i<dane.length;i++){
            output+=`<div class="col mb-5 prod" id="`+dane[i].category+`">
                        <div class="card h-100">
                            <img class="card-img-top" src="assets/`+dane[i].img+`" id="image`+dane[i].id+`" alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder"> <label class="pname" id="name`+dane[i].id+`">`+dane[i].title+`</label></h5>
                                    <div class="d-flex justify-content-center small text-warning mb-2">`;
            for(let j=0;j<dane[i].stars;j++){
                output+=`<div class="bi-star-fill"></div>`;
            }
            output+=`</div>
                            <label id="price`+dane[i].id+`">$`+dane[i].price+`.00</label>
                    </div>
                    </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button onclick="add(`+dane[i].id+`)" class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                     </div>
                 </div>
            </div>`;
        }
        document.getElementById("page").innerHTML=output;
    })
})