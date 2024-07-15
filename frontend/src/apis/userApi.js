import axios from "axios";
import { server_url } from "../config";

export const listProperty = async (propertyData) => {
  const response = await axios.post(
    `${server_url}/user/list-property`,
    propertyData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return response;
};

export const getUserDetails = async () => {
  const response = await axios.get(`${server_url}/user/details`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return response;
};

export const investInProperty = async (propId, percentage , tokens_left) => {
  const response = await axios.post(
    `${server_url}/user/invest/${propId}`,
    { share_per: percentage , tokens_left: tokens_left},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return response;
};

export const fundAccountWithTestDiam = async () => {
  const response = await axios.get(`${server_url}/fund-account`);
  return response;
};
