import axios from "axios";

const request = axios.create({
  baseURL: "http://rt-jobs.herokuapp.com/api/"
});

export const postBusiness = async ({ display_name, email, password }) => {
  const postedBusinessLink = "/business/signup";
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

export const loginBusiness = async ({ email, password }) => {
  const loginBusinessLink = "/business/login";
  console.log(email, password);
  const {
    data: { business }
  } = await request.post(loginBusinessLink, {
    email,
    password
  });
  console.log(business);
  return business;
};
