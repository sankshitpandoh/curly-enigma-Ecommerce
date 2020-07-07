const UserLoggedIn = (state = false, action) => {
    switch(action.type){
        case "SIGN_IN":
            return {state : true}
        case "SIGN_OUT":
            return false
        default:
            return false
    }
}

export default UserLoggedIn