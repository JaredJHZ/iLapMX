const initialState = {
    logged: false,
    user: null
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ONLOGIN'){
        return {
            ...state,
            user: action.user,
            logged: action.logged
        }
    }
    if (action.type === 'ISLOGGED'){
        let user = localStorage.getItem('usuario');
        if (user) {
            return {
                ...state,
                user: user,
                logged: true
            }
        }else {
            return {
                ...state,
                user: null,
                logged: false
            }
        }
    }
    
    return state;
}
export default reducer;