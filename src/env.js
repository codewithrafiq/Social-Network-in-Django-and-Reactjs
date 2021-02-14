import Cookies from 'js-cookie';



export const domain = "http://127.0.0.1:8000";
// export const domain = "";

/*
    window.localStorage.setItem('myCat', 'Tom');
    window.localStorage.removeItem('myCat');
    window.localStorage.clear();
    window.localStorage.getItem("token");
*/
const token = "1961b21ed49f69bc7f696807a094723b634dbe37"

export const header = {
    Authorization: `token ${token}`
}


const csrftoken = Cookies.get('csrftoken')
export const header2 = {
    Authorization: `token ${token}`,
    'X-CSRFToken': csrftoken,
}