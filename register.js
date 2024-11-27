import { getDatas,postData } from "./API/requests/requests.js";

import baseurl from "./API/baseurl.js";

// getDatas(baseurl + "/users")
// .then(res=>console.log(res.datas)
// )


let registerform = document.querySelector(".register-form")
let nameinput = document.querySelector("#name")
let surnameinput = document.querySelector("#surname")
let addressinput = document.querySelector("#InputEmail")
let passwordinput = document.querySelector("#InputPassword")

registerform.addEventListener("submit", (e) => {

    e.preventDefault();

    if (nameinput.value.trim() != "" && surnameinput.value.trim() != "" && addressinput.value.trim() != "" && passwordinput.value.trim() != "") {


        getDatas(baseurl + "/users")
            .then(res => {
                res.datas

                let users = res.datas

                let findedUser = users.find(user => addressinput.value == user.email)

                if (findedUser) { alert(`This email has already been registered..\n${addressinput.value}`) }

                else {

                    let newobj={
                        name:nameinput.value,
                        surname:surnameinput.value,
                        email:addressinput.value,
                        password:passwordinput.value,
                        isAdmin:true,
                        favorites:[]
                    }

                  postData(baseurl + "/users",newobj)
                  .then(res=>console.log(res.onedata)
                  )
                  window.location.href="login.html"
                  alert("User has registered Succesfully...")

                

                }




            }
            )
    }


    else{

       alert("All inputs must filled in...") 
    }






})