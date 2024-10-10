import axios from "axios";

export const fetchAllServices = async () => {
  const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/services`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data;
  } catch (error) {
    console.error("There was an error fetching the services!", error);
    return [];
  }
};

export const fetchSingleService = async (id) => {
  const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/service/${id}`;
  try {
    const response = await axios.get(apiUrl);
    // console.log("response from single service", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("There was an error fetching this service!", error);
    return [];
  }
};

export const fetchSingleDoctor = async (id)=> {
  const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/doctor/${id}`;
  console.log(apiUrl);
  try {
    const response = await axios.get(apiUrl);
    console.log("Doctor details:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("There was an error fetching this doctor!", error);
    return [];
  }
};

