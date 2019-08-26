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
  return business;
};

export const loginBusiness = async ({ email, password }) => {
  const loginBusinessLink = "/business/login";
  const {
    data: { business }
  } = await request.post(loginBusinessLink, {
    email,
    password
  });
  return business;
};

export const postApplicant = async ({ display_name, email, password }) => {
  const postedUserLink = "/user/signup";
  const {
    data: { user }
  } = await request.post(postedUserLink, {
    display_name,
    email,
    password
  });
  return user;
};
