// let div = document.createElement("div");
// div.innerHTML = "<p>this is a p tag</p>";
// document.body.appendChild(div)

// let div = document.createElement("div");
// div.innerHTML = "<h1>this ia ekta h1</h1>";
// document.body.appendChild(div);
// let div = document.createElement("div");
// div.className = "rakib";
// div.id = "rakibId";
// document.body.appendChild(div);
// let text = document.createTextNode("inner text into the div");
// div.appendChild(text);
// document.body.appendChild(text);
// let ul = document.createElement("ul");
// ul.id="manu";

// let li1 = document.createElement("li");
// li1.textContent = "home";
// ul.appendChild(li1);
// let li2 = document.createElement("li");
// li2.textContent = "about";
// ul.appendChild(li2);
// let li3 = document.createElement("li");
// li3.textContent = "container";
// ul.appendChild(li3);
// let li4 = document.createElement("li");
// li4.textContent = "display";
// ul.appendChild(li4);

// document.body.appendChild(ul);
// let div = document.createElement("div");
// div.id = "menu";
//  let p = document.createElement("p");

//  p.innerHTML = "this a rakib";
//  div.appendChild(p);
//  document.body.appendChild(div);

// let menu = document.querySelector("#menu");
// let lang = ['python', 'javascript', 'php', 'c programming', 'c##'];
//  let fragment = document.createDocumentFragment();
//  lang.forEach((language)=>{
//     let li =document.createElement("li");
//     li.textContent = language;
//     fragment.appendChild(fragment);
//  })

//  menu.appendChild(fragment);

// let menu = document.querySelector("#menu");
// menu.style.color = "gray"







// let UserName = document.querySelector("#UserName");

// let Email = document.querySelector("#Email");
// let Password =document.querySelector("#Password");
// let Password2 =document.querySelector("#Password2");
// let Form = document.querySelector("#Form");

// function ShowError(input, masses){
//     const FormControl = input.parentElement
//     FormControl.className = "form-control error";
//    const small = FormControl.querySelector("small");
//    small.innerText = masses;
// }
// function ShowSucces(input){
//     const FormControl = input.parentElement
//     FormControl.className = "form-control success";
// }
// function checKMil (input){
//     const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(RegEx.text(input.value)){
//         ShowSucces(input)
//     }else{
//         ShowError(input, "Email is not valed");
//     }
    
    
// }

// function CheckInputLength(input,min,max){
//     if(input.value.length < min){
//         ShowError(input, `${GetFieldName(input)} You much be at least ${min} Characters`);
//     }else if(input.value.length > max){
//         ShowError(input, `${GetFieldName(input)} You much be at les than ${max} Characters`);

//     }
//     else{
//         ShowSucces(input);
//     }
// }

// function GetFieldName(){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// function CheckPasswordMatch(input1, input2){
//     if(input1.value !== input2.value){
//         ShowError(input2, "Password is not same")
//     }
// }



// Form.addEventListener("submit",(e) => {}=>{
//     e.preventDefault();
//     CheckInputLength(UserName, 3, 20)
//     CheckInputLength(Password, 6, 30)
//     checKMil(Email);
//     CheckPasswordMatch(Password,Password2)

// })
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});