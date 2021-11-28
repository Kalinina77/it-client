import axios from "axios";
import { IEmployee, IEmployeePost } from "./types";

const baseUrl = "api/employees";

export const getEmployees = async () => {
  const res = await axios.get<IEmployee[]>(`${baseUrl}`);
  return res.data;
};

export const getEmployeeById = async (id: string) => {
  // const res = await axios.get<IEmployeeGet>(`${baseUrl}/${id}`);
  const res = {
    data: {
      idEmployee: 1,
      surname: "string",
      name: "string",
      middleName: "string",
      login: "string",
      password: "string",
      numberPassport: "8888",
      seriaPassport: "string",
      phone: "string",
      inn: "string",
      dismissed: false,
      administrator: false,
    },
  };
  return res.data;
};

export const postEmployee = async (payload: any) => {
  const res = await axios.post<string>(`${baseUrl}`, payload);
  return res.data;
};

export const putEmployee = async (id: string, payload: any) => {
  const res = await axios.put<boolean>(`${baseUrl}/${id}`, payload);
  return res.data;
};
