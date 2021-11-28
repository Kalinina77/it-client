import axios from "axios";

const baseUrl = "weatherforecast";

export interface IWeather {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export const getWeather = async () => {
  const res = await axios.get<IWeather[]>(`${baseUrl}`);
  return res.data;
};
