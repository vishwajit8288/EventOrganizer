import axios from 'axios';
import * as Constant from './Constant'


const ApiUrl = process.env.REACT_APP_API_KEY;

const showUserData = async () => {
    try {
        const result = await axios.get(ApiUrl + Constant.GET_ALL_USER);
        return result.data
    }
    catch (error) {
        alert(error.code)
    }
}
const addUser = async (obj) => {
    try {
        const result = await axios.post(ApiUrl + Constant.Add_User, obj);
        return result.data
    } catch (error) {
        alert(error.code)
    }

}
export {showUserData,addUser}