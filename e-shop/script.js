function SignInComponent(){
   var mainDiv = document.getElementById("main");
   mainDiv.innerHTML = "";
   mainDiv.setAttribute("style","height:100vh;");
   mainDiv.setAttribute("class","d-flex justify-content-center align-items-center");

   var signInForm = document.createElement("div");
   signInForm.setAttribute("style","width:30%; height:300px; box-shadow: 0 0 5px grey");
   
   var headerDiv = document.createElement("div");
   headerDiv.setAttribute("style","height: 50px;");
   headerDiv.setAttribute("class","d-flex bg-danger justify-content-center align-items-center");

   var h5 = document.createElement("h5");
   h5.innerText = "Sign In";
   headerDiv.appendChild(h5); 
   signInForm.appendChild(headerDiv);
   
   var formDiv = document.createElement("div");
   formDiv.setAttribute("class","p-5 d-flex align-items-center flex-column")
   
   var emailInput = document.createElement("input");
   emailInput.setAttribute("class","form-control");
   emailInput.setAttribute("id","email");
   emailInput.setAttribute("placeholder","Enter your email id");
   
   formDiv.appendChild(emailInput);
   
   var passwordInput = document.createElement("input");
   passwordInput.setAttribute("placeholder","Enter your password here");
   passwordInput.setAttribute("class","form-control mt-3");
   passwordInput.setAttribute("id","password");
   passwordInput.setAttribute("type","password");
   formDiv.appendChild(passwordInput);
     
   var signInButton = document.createElement("button");
   signInButton.setAttribute("class","btn btn-secondary text-white mt-3");
   signInButton.setAttribute("style","width:100%");
   signInButton.innerText = "Sign in"
   formDiv.appendChild(signInButton);

   var newUserLabel = document.createElement("small");
   newUserLabel.innerText = "New user ?";
   newUserLabel.setAttribute("class","mt-3 text-primary");
   newUserLabel.setAttribute("style","cursor:pointer");

   newUserLabel.addEventListener("click",function(){
     SignUpComponent(mainDiv);
   })
   formDiv.appendChild(newUserLabel);
   signInForm.appendChild(formDiv);
   mainDiv.appendChild(signInForm);
}

function SignUpComponent(mainDiv){
   mainDiv.innerHTML = "";
   mainDiv.setAttribute("style","height:100vh;");
   mainDiv.setAttribute("class","d-flex justify-content-center align-items-center");

   var signUpForm = document.createElement("div");
   signUpForm.setAttribute("style","width:30%; height:300px; box-shadow: 0 0 5px grey");
   
   var headerDiv = document.createElement("div");
   headerDiv.setAttribute("style","height: 50px;");
   headerDiv.setAttribute("class","d-flex bg-danger justify-content-center align-items-center");

   var h5 = document.createElement("h5");
   h5.innerText = "Sign Up";
   headerDiv.appendChild(h5); 
   signUpForm.appendChild(headerDiv);
   
   var formDiv = document.createElement("div");
   formDiv.setAttribute("class","p-5 d-flex align-items-center flex-column")
   
   var emailInput = document.createElement("input");
   emailInput.setAttribute("class","form-control");
   emailInput.setAttribute("id","email");
   emailInput.setAttribute("placeholder","Enter your email id");
   
   formDiv.appendChild(emailInput);
   
   var passwordInput = document.createElement("input");
   passwordInput.setAttribute("placeholder","Enter your password here");
   passwordInput.setAttribute("class","form-control mt-3");
   passwordInput.setAttribute("id","password");
   passwordInput.setAttribute("type","password");
   formDiv.appendChild(passwordInput);
     
   var signUpButton = document.createElement("button");
   signUpButton.setAttribute("class","btn btn-secondary text-white mt-3");
   signUpButton.setAttribute("style","width:100%");
   signUpButton.innerText = "Sign up"
   signUpButton.addEventListener("click",function(){
     signUpAction(emailInput,passwordInput);
   });
   formDiv.appendChild(signUpButton);

   var alereadyHaveAccount = document.createElement("small");
   alereadyHaveAccount.innerText = "Already have a account ?";
   alereadyHaveAccount.setAttribute("class","mt-3 text-primary");
   alereadyHaveAccount.setAttribute("style","cursor:pointer");

   alereadyHaveAccount.addEventListener("click",function(){
     mainDiv.innerHTML = "";
     SignInComponent();
   })
   formDiv.appendChild(alereadyHaveAccount);
   signUpForm.appendChild(formDiv);
   mainDiv.appendChild(signUpForm);
}

function signUpAction(emailInput,passwordInput){
   var email = emailInput.value;
   var password = passwordInput.value;
   
   var newUser = {email,password};
   var userList = JSON.parse(localStorage.getItem("user-list"));
   userList.push(newUser);

   localStorage.setItem("user-list",JSON.stringify(userList));
   window.alert("Sign up success.....");
   SignInComponent();
}