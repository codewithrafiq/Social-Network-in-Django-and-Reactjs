import Cookies from 'js-cookie';



// export const domain = "http://127.0.0.1:8000";
export const domain = "";

/*
    window.localStorage.setItem('myCat', 'Tom');
    window.localStorage.removeItem('myCat');
    window.localStorage.clear();
    window.localStorage.getItem("token");
*/
const token = "536e3d52053354c37f7cfa519069e331e1e96f37"
export const header = {
    Authorization: `token ${token}`
}
const csrftoken = Cookies.get('csrftoken')
export const header2 = {
    Authorization: `token ${token}`,
    'X-CSRFToken': csrftoken,
}