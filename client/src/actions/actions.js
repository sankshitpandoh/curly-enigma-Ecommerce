export const logUserIn = () => {
    return{
        type: "SIGN_IN"
    }
}

export const logUserOut = () => {
    return{
        type: "SIGN_OUT"
    }
}

export const openProduct = (data) => {
    return{
        type: "OPEN_PRODUCT",
        payload: data
    }
}

export const closeProduct = (data) => {
    return{
        type: "CLOSE_PRODUCT"
    }
}