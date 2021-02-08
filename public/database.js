
//add user score
addScoreBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    //add user score
    database.collection("scores").add({
        email: currentUser.email,
        cpu_name: cpu_name.value,
        cpu_score: cpu_score.value,
    }).then(()=>{
        //close modal
        const modal = document.querySelector(".modal");
        M.Modal.getInstance(modal).close();
    });

});