import axios from "axios";

const request = axios.create({
  baseURL: "http://rt-jobs.herokuapp.com/api/"
});

export const postBusiness = async ({ display_name, email, password }) => {
  const postedBusinessLink = "/business/signup";
  console.log(display_name, email, password);
  const {
    data: { business }
  } = await request.post(postedBusinessLink, {
    display_name,
    email,
    password
  });
  console.log(business);
  return business;
};
