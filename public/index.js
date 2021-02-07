const signedIn = document.querySelectorAll(".signed_in");
const signedOut = document.querySelectorAll(".signed_out");

//change the UI based on the auth state
const changeUi = (user)=>{
    if(user){
        signedIn.forEach(element=> element.style.display = "block");
        signedOut.forEach(element=> element.style.display = "none");
    }
    else{
        signedIn.forEach(element=> element.style.display = "none");
        signedOut.forEach(element=> element.style.display = "block");
    }
}