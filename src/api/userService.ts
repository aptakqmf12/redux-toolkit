import axios from "axios";

class userService {
  static fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };
}

export default userService;
