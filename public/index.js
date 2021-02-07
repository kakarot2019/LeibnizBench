const signedIn = document.querySelectorAll(".signed_in");
const signedOut = document.querySelectorAll(".signed_out");
const currentUser = document.querySelector("#current_user");

//change the UI based on the auth state
const changeUi = (user)=>{
    if(user){
        signedIn.forEach(element=> element.style.display = "block");
        signedOut.forEach(element=> element.style.display = "none");
        currentUser.textContent = user.email;
    }
    else{
        signedIn.forEach(element=> element.style.display = "none");
        signedOut.forEach(element=> element.style.display = "block");
        currentUser.textContent = "";
    }
}