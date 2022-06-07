import axios from "axios";
export function test(data:{name:string,html:string}){
    return axios.post('/system/order/test',data)
}
export function test2(data:{name:string,html:string}){
    return axios.post('/system/order/test',data)
}