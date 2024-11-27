import { getDatas } from "./API/requests/requests.js";

import baseurl from "./API/baseurl.js";


let loginform = document.querySelector(".login-form")
let addressinput = document.querySelector("#InputEmail")
let passwordinput = document.querySelector("#InputPassword")

loginform.addEventListener("submit", (e) => {

    e.preventDefault();

    if (addressinput.value.trim() != "" && passwordinput.value.trim() != "") {

        getDatas(baseurl + "/users")
            .then(res => {
                res.datas

                let users = res.datas

                

                let findedUser = users.find(user => addressinput.value == user.email && passwordinput.value == user.password)


                if (findedUser) {

                    localStorage.setItem("address",findedUser.id)

                     window.location.href = "main.html"

                    alert("User has login Succesfully...")

                }

                else {

                    let findedUser1 = users.find(user => addressinput.value == user.email && passwordinput.value != user.password)


                    if (findedUser1) {

                        alert("Password is incorrect")

                    }

                    else {

                        alert("User doesn't exist")
                    }


                }



            }
            )




    }

    else {

        alert("All inputs must filled in...")
    }






})