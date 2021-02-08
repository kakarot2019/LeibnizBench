const signedIn = document.querySelectorAll(".signed_in");
const signedOut = document.querySelectorAll(".signed_out");
const currentUserEmail = document.querySelector("#current_user");
var currentUser = "";

const cpuScore = document.querySelector("#cpu_score");
const cpu_name = document.querySelector("#cpu_name");
const addScoreBtn = document.querySelector("#add_score_button");

//change the UI based on the auth state
const changeUi = (user)=>{
    if(user){
        signedIn.forEach(element=> element.style.display = "block");
        signedOut.forEach(element=> element.style.display = "none");
        currentUserEmail.textContent = user.email;
        currentUser = user;
    }
    else{
        signedIn.forEach(element=> element.style.display = "none");
        signedOut.forEach(element=> element.style.display = "block");
        currentUser.textContent = "";
    }
}
//listen to negative values
cpuScore.addEventListener("change",(e)=>{
    if(cpuScore.value < 0.1){
        addScoreBtn.setAttribute("disabled","");
        addScoreBtn.textContent = "You must be using light speed";
    }else{
        addScoreBtn.removeAttribute("disabled");
        addScoreBtn.textContent = "Add Score";
    }
    
});