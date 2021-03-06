import {axios} from '../../axios';
let config = {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
};
const login = (user, logged)=> {
    return {
        type:'ONLOGIN',
        user: user,
        logged: logged
    }

}

const actionLogin = (user, password, close) => {
    return function(dispatch) {
        let log = {
            email: user,
            password: password
        }
        axios.post('/user/login',log,config).then(
            (data) => {
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('usuario', JSON.stringify(data.data.user));
                if (close) {
                    close();
                }
                dispatch(login(data.data.user,true));
            }
        ).catch(error => dispatch(login('error',false)));
    }
}

export {login, actionLogin}