import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const Test = () => {
  const [count, setCount] = useState<number>(2);
  const [count2, setCount2] = useState<number>(3);

  useEffect(() => {
    setCount2(count2+3)
    // alert(`Count has been changed. Newe value: ${count}, ${count2}`)
  }, [count] )

  const handleButtonClick = () => {
    setCount(count + 10)
  }
  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={handleButtonClick}>Change Num</Button>
      <h2>{count2}</h2>
      {/* <Button onClick={() => setCount2(count2 + 5)}>Change Count2</Button> */}
    </div>
  );
};

export default Test;
