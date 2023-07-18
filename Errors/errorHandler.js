
const errorFunction = (error)=>{
    const errors = {email: "", password: ""}
    if(error.message === "account with email does not exist."){
        errors.email = 'this email is not registered on this service'
        return errors
    }
    if(error.message === "incorrect password."){
        errors.email = 'kindly enter corect password'
        return errors
    }
    return errors
}
