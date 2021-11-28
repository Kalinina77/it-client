import axios from "axios";

const baseUrl = "api/posts";

export interface IPostPost {
  name: string;
}

export const getPosts = async () => {
    const res = await axios.get<any>(`${baseUrl}`);
    return res.data;
  };

export const postPost = async (payload: IPostPost) => {
  const res = await axios.post<string>(`${baseUrl}`, payload);
  return res.data;
};
