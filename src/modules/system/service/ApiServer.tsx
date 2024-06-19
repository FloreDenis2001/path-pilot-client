import HttpResponse from "../httpRespons/HttpRespons";

class ApiServer{

    api<U, T>(path: string, method: string, body: U, token: string): Promise<HttpResponse<T>> {
     const url = `http://${window.location.hostname}:8080/api/v1` + path;
     const options: RequestInit = {
       method,
       headers: {
         "Content-Type": "application/json;charset=utf-8",
         Authorization: `Bearer ${token}`,
       },
       body: body == null ? null : JSON.stringify(body),
     };
   
     return fetch(url, options);
   }
   }
   
export default ApiServer;