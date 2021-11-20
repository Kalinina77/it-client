import axios from "axios";

const baseUrl = "api/employees";

export interface IEmployee {
  idEmployee: number;
  surname: string;
  name: string;
  middleName: string;
  login: string;
  phone: string;
//   password: string;
//   numberPassport: string;
//   seriaPassport: string;
//   inn: string;
//   dismissed: boolean;
//   administrator: boolean;
}

export const getEmployees = async () => {
    const res = await axios.get<IEmployee[]>(`${baseUrl}`);
  return res.data;
};

export interface IEmployeeGet {
  idEmployee: number;
  surname: string;
  name: string;
  middleName: string;
  login: string;
  password: string;
  numberPassport: string;
  seriaPassport: string;
  phone: string;
  inn: string;
  dismissed: boolean;
  administrator: boolean;
  passportCopy: string;
}
