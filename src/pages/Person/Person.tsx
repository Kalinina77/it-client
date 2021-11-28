import { Button, TextField } from "@mui/material";
import { getEmployeeById } from "api/employees/persons";
import { IEmployeeGet } from "api/employees/types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const [person, setPerson] = useState<IEmployeeGet | null>(null);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPersonRequest = async () => {
      try {
        const data = await getEmployeeById(id);
        setPerson(data);
      } catch {
        console.error("fetchPersonsRequest");
      }
    };
    void fetchPersonRequest();
  }, []);

  return (
    <div className="Person">
      <div className="Person-Header">
        <h2> Иванов Иван Иванович </h2>
      </div>
      {person ? (
        <div>
          <InfoRow label="Логин" value={person.login} />
          <InfoRow label="Телефон" value={person.phone} />

          <TextField
            // fullWidth
            id="name"
            name="name"
            label="Номер паспорта"
            value={person.numberPassport}
            disabled
          />
        </div>
      ) : (
        <div></div>
      )}
      <Button onClick={() => alert("hello")}>Test</Button>

      <Button>
        <Link to="/persons/new">Изменить</Link>
      </Button>
    </div>
  );
};

export default Person;
