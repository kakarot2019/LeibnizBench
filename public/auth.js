const signInForm = document.querySelector("#sign_in_form");
const signUpForm = document.querySelector("#sign_up_form");
const signOut = document.querySelector("#sign_out");
const signOutMobile = document.querySelector("#sign_out_mobile");

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = signUpForm.sign_up_email.value;
    const password = signUpForm.sign_up_password.value;
    try{
        if(email.length < 6 ){
            throw new Error("Incorrect email length");
        }
        if(password.length < 6){
            throw new Error("Password must be at least 6 characters long");
        }
        auth.createUserWithEmailAndPassword(email, password).then(cred =>{
            return database.collection('scores').doc(cred.user.uid).set({
                cpu_name:"",
                Score:""
            })
        })
        .then(()=>{
            console.log("registered successfully");
        })
    }
    catch(err){
        console.log(err)
    }
});

signInForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = signInForm.sign_in_email.value;
    const password = signInForm.sign_in_password.value;

    try{
        if(email.length < 6 ){
            throw new Error("Incorrect email length");
        }
        if(password.length < 6){
            throw new Error("Password must be at least 6 characters long")
        }
        auth.signInWithEmailAndPassword(email,password).then(cred=>{
            console.log("logged in as : "+ cred.user.email);
        })
    }
    catch(err){
        console.log(err);
    }

});

signOut.addEventListener('click',(e)=>{
    auth.signOut();
});

signOutMobile.addEventListener('click',(e)=>{
    auth.signOut();
});
