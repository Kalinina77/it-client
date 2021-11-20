import { Button } from "@mui/material";
import React from "react";
import { IEmployeeGet } from "../../api/persons";
import "./Person.scss";

const InfoRow = (prop: { label: string; value: string }) => {
  const { label, value } = prop;
  return (
    <div className="Person-InfoRow">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

const Person = () => {
  return (
    <div className="Person">
     <div className="Person-Header"> <h2> Иванов Иван Иванович </h2> </div>
      {/* <InfoRow label="Логин" value={mockPerson.login as string} /> */}
      <InfoRow label="Телефон" value="+7999999999" />
   

      <Button onClick={() => alert("hello")}>Test</Button>
    </div>
  );
};

export default Person;
