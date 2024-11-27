import { getDatas } from "./API/requests/requests.js";

import baseurl from "./API/baseurl.js";


let row=document.querySelector(".row");
let userid=document.querySelector("address") || null;
let login=document.querySelector(".login");
let logout=document.querySelector(".log-out")
let loginbtn=document.querySelector(".loginbtn");




function createNav(){
    
    let userid=localStorage.getItem("address") || null;

    if(userid){

    login.style.display="none";

    getDatas(baseurl+"/users")
    .then(res=>{let users=res.datas

        users.forEach(user=>{logout.innerHTML=` <span>${user.name}</span>
        <button class="btn logout btn-outline-danger" type="submit">Log Out</button>`
    })

    let logoutbtn=document.querySelector(".logout")

    logoutbtn.addEventListener("click", (e) => {

        e.preventDefault();

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out it!"
          }).then((result) => {
            if (result.isConfirmed) {

                localStorage.removeItem("address")

              Swal.fire({
                title: "    Log out!",
                text: "You  have been log out successfully.",
                icon: "success"
              });

              createNav()
            }
          });


    
    
    })



})}

    else{

    login.style.display="block";
    
    logout.style.display="none";

    loginbtn.addEventListener("click",(e)=>{

        e.preventDefault();

        window.location.href="login.html";

    })}}


createNav();



function getdata(){

getDatas(baseurl+ "/products")
.then(res=>showproducts(res.datas))

}

getdata()


function showproducts(products){

    products.forEach(product => {

        row.innerHTML+=
        
        ` <div class="col">
        <div class="card my-3" style="width:18rem;height:55vh">
   <img src="https://myshops.az/images/CONTENT/new/00000009585/Note-13-Ice-Blue-1.webp" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.brand}</h5>
      <h6 class="card-title">${product.model}</h6>
      <h6 class="card-title">${product.operatingSystem}</h6>
      <h6 class="card-title">${product.year}</h6>
      <h6 class="card-title">${product.price}$</h6>
           <a href="details.html?id=${product.id}" class="btn btn-outline-primary my-4"><i class="fa-solid fa-circle-info"></i></a>
      <a href="#" class="btn btn-outline-success my-4"><i class="fa-solid fa-heart"></i></a>
           <a href="#" class="btn btn-outline-danger"><i class="fa-solid fa-basket-shopping"></i> Add to basket</a>
      
    </div>
     
    </div>`



        
    });


}