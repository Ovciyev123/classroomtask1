import { getDataId } from "./API/requests/requests.js"

import baseurl from "./API/baseurl.js"


let row=document.querySelector(".row")

let IdParams = new URLSearchParams(window.location.search)

let id=IdParams.get('id')





function dataid(){

    getDataId(baseurl+ "/products", id)
    .then(res=>showproductsid(res.data))
    
    }
    
    dataid()

    function showproductsid(productid){

productid.forEach(id=>{

    row.innerHTML+=
        
    ` <div class="col">
    <div class="card my-3" style="width:18rem;height:55vh">
<img src="https://myshops.az/images/CONTENT/new/00000009585/Note-13-Ice-Blue-1.webp" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${id.brand}</h5>
  <h6 class="card-title">${id.model}</h6>
  <h6 class="card-title">${id.operatingSystem}</h6>
  <h6 class="card-title">${id.year}</h6>
  <h6 class="card-title">${id.price}$</h6>
    
  
</div>
 
</div>`
})

    }






