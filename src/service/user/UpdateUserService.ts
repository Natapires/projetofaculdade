interface IUserRequest {
    id: number;
    name: string;
    email: string;
    admin?: boolean;
    password: string;
  }
  
  class UpdateUserService {
    async execute({ id, name, email, admin = false, password }: IUserRequest) {
     
  
      if (!email) {
        throw new Error("Email incorrect");
      }
  
       var vuser = {
       id:1, name:"Nome 1", email:"email 2", admin:"teste", password:1234
      }
  
      return vuser;
    }
  }
  
  export { UpdateUserService };