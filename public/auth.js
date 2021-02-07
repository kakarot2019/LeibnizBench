const signInForm = document.querySelector("#sign_in_form");
const signUpForm = document.querySelector("#sign_up_form");
const signOut = document.querySelector("#sign_out");
const signOutMobile = document.querySelector("#sign_out_mobile");

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
            //change ui
            console.log("registered successfully");
        })
    }
    catch(err){
        //show errors
        console.log(err)
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
    }
    catch(err){
        //show errors
        console.log(err);
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
