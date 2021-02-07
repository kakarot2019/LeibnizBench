const signInForm = document.querySelector("#sign_in_form");
const signUpForm = document.querySelector("#sign_up_form");
const signOut = document.querySelector("#sign_out");
const signOutMobile = document.querySelector("#sign_out_mobile");
var errMessageSignUp = document.querySelector("#err_message_sign_up");
var errMessageSignIn = document.querySelector("#err_message_sign_in");

//sign up user using email and password
signUpForm.addEventListener('submit', (e)=>{
    //capturing control values
    e.preventDefault();
    const email = signUpForm.sign_up_email.value;
    const password = signUpForm.sign_up_password.value;
    //catching possible errors when signing up
    try{
        if(email.length < 6 ){
            throw new Error("Incorrect email length");
        }
        if(password.length < 6){
            throw new Error("Password must be at least 6 characters long");
        }// create cpu scores collection
        auth.createUserWithEmailAndPassword(email, password).then(cred =>{
            return database.collection('scores').doc(cred.user.uid).set({
                cpu:[{}]
            })
        })
        .then(()=>{
            //show email
            //clear err message after successful sign in
            errMessageSignUp.textContent = "";
            //reset sign in form
            signInForm.reset();
            //close modal after sign in
            const modal = document.querySelector(".modal");
            M.Modal.getInstance(modal).close();
        })
        .catch((err)=>{
            errMessageSignUp.textContent = err.message;
        });
    }
    catch(err){
        //show error
        errMessageSignUp.textContent = err.message;
    }
});

signInForm.addEventListener("submit",(e)=>{
    //capture control values
    e.preventDefault();
    const email = signInForm.sign_in_email.value;
    const password = signInForm.sign_in_password.value;
    //catch errors
    try{
        if(email.length < 6 ){
            throw new Error("Incorrect email length");
        }
        if(password.length < 6){
            throw new Error("Password must be at least 6 characters long")
        }
        // sign in user using email and password
        auth.signInWithEmailAndPassword(email,password).then(cred=>{
            console.log("logged in as : "+ cred.user.email);
        })
        .then(()=>{
            //clear err message after successful sign in
            errMessageSignIn.textContent = "";
            //reset sign in form
            signInForm.reset();
            //close modal after sign in
            const modal = document.querySelector(".modal");
            M.Modal.getInstance(modal).close();
        })
        .catch((err)=>{
            errMessageSignIn.textContent = err.message;
        });
    }
    catch(err){
        //show error
        errMessageSignIn.textContent = err.message;
    }

});
//sign out user
signOut.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut();
});
//sign out user from small screen
signOutMobile.addEventListener('click',(e)=>{
    auth.signOut();
});

auth.onAuthStateChanged(user=>{
    if(user){
        changeUi(user);
    }
    else{
        changeUi(user);
    }
})
