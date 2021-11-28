export interface IEmployee {
  idEmployee: number;
  surname: string;
  name: string;
  middleName: string;
  login: string;
  phone: string;
  password: string;
  numberPassport: string;
  seriaPassport: string;
  //   inn: string;
  //   dismissed: boolean;
  //   administrator: boolean;
}

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
  passportCopy?: string;
}


export interface IEmployeePost {
    surname: string;
    name: string;
    middleName: string;
    login: string;
    numberPassport: string;
    seriaPassport: string;
    phone: string;
    inn: string;
    dismissed: boolean;
    administrator: boolean;
    passportCopy?: string;
  }
