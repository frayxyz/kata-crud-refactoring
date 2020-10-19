import axios from 'axios';
const baseUrl = "http://localhost:8080/api/";

export default function types() {

    return axios.get(baseUrl + "typestodo").then(res => {
        console.log(res.data);

    });


}
