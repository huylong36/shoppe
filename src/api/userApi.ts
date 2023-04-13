import axiosClient from "./axiosClient";

const userApi =  {
    register(data:any){
        const url = '/auth/local/register';
        return axiosClient.post(url , data)
    }
}
export default userApi;