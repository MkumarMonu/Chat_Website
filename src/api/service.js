import axios from "axios";
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/user/login`,
      userData
    );
    if ((response?.data?.success = true)) {
      alert(`${response.data.message}`);
    } else {
      alert(`${response.data.message}`);
    }
  } catch (error) {
    console.log(error);
    // alert(`${response.message}`);
  }
};
