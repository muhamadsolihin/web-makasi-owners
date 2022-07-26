import http from "@/http-common"

class RegisterService {
  checkAccount(data: object): Promise<any> {
    return http.post("/owl/v1/check-account", data);
  } 
}

export default new RegisterService();
