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

export const loginApplicant = async ({ email, password }) => {
  const loginUserLink = "/user/login";
  const {
    data: { user }
  } = await request.post(loginUserLink, {
    email,
    password
  });
  return user;
};

export const getJobsByBusinessId = async business_id => {
  const getBusinessJobs = `/jobs/${business_id}`;
  const {
    data: { jobs }
  } = await request.get(getBusinessJobs, {
    business_id
  });
  return jobs;
};

export const postBusinessJob = async jobDetails => {
  const postBusinessJobs = "jobs/";
  const {
    data: { job }
  } = await request.post(postBusinessJobs, { ...jobDetails });
  return job;
};

export const getJobByJobId = async job_id => {
  const getJobByJobId = `/job/${job_id}`;
  const {
    data: { job }
  } = await request.get(getJobByJobId, job_id);
  return job;
};

export const getApplicantsByJobId = async job_id => {
  const getApplicants = `/applications/?job_id=${job_id}`;
  const {
    data: { applications }
  } = await request.get(getApplicants);
  return applications;
};
export const postBusinessApproval = async (app_id, res) => {
  console.log(app_id, res, "post");
  const postBusinessApproval = `/applications/${app_id}`;
  const {
    data: { application }
  } = await request.patch(postBusinessApproval, {
    confirmation: res
  });
  console.log(application, "app");
  return application;
};

export const getJobs = async () => {
  const getJobsLink = "/jobs";
  const {
    data: { jobs }
  } = await request.get(getJobsLink);
  return jobs;
};

export const getApplications = async localId => {
  const getApplicationsLink = `/applications?user_id=${localId}`;
  const {
    data: { applications }
  } = await request.get(getApplicationsLink);
  return applications;
};

export const postApplication = async postApplication => {
  const postApplicationsLink = "applications/";
  const {
    data: { application }
  } = await request.post(postApplicationsLink, postApplication);
  return application;
};

export const patchApplication = async (applications, confirmation) => {
  const patchApplicationsLink = `applications/${applications}`;
  const {
    data: { application }
  } = await request.patch(patchApplicationsLink, { confirmation });
  return application;
};

export const patchApplicationScore = async (applications, score) => {
  const patchApplicationsLink = `applications/${applications}`;
  const {
    data: { application }
  } = await request.patch(patchApplicationsLink, { score });
  return application;
};

export const patchApplicationMessages = async (applications, messages) => {
  const patchApplicationsLink = `applications/${applications}`;
  const {
    data: { application }
  } = await request.patch(patchApplicationsLink, { messages });
  return application;
};
