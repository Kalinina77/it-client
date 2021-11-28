import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getWeather, IWeather } from "api/test";
import { getPosts, postPost } from "api/posts";

const Test = () => {
  const [count, setCount] = useState<number>(2);
  const [count2, setCount2] = useState<number>(3);
  const [weather, setWeather] = useState<IWeather[] | null>(null);

  useEffect(() => {
    setCount2(count2 + 3);
    // alert(`Count has been changed. Newe value: ${count}, ${count2}`)
  }, [count]);

  useEffect(() => {
    const fetchPersonRequest = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch {
        console.error("fetchPersonsRequest");
      }
    };
    void fetchPersonRequest();
  }, []);

  useEffect(() => {
    const fetchPersonRequest = async () => {
      try {
        const data = await getPosts();
        console.log(data)
      } catch {
        console.error("fetchPpstsRequest");
      }
    };
    void fetchPersonRequest();
  }, []);

  const fetchPostPost = async () => {
    const res = await postPost({ name: "TestPost" });
    console.log(res);
  };

  const handleButtonClick = () => {
    setCount(count + 10);
  };
  return (
    <div>
      <div>
        {weather?.map((x) => (
          <div>{x.summary}</div>
        ))}
      </div>
      <br />
      <br />
      <br />

      <h2>{count}</h2>
      <Button onClick={handleButtonClick}>Change Num</Button>
      <h2>{count2}</h2>
      <br />
      <br />
      <br />
      <Button onClick={() => fetchPostPost()}>Send POST</Button>
    </div>
  );
};

export default Test;
