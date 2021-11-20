import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmployees, IEmployee } from "../../api/persons";
import "./Persons.scss";

const Persons = () => {
  const [persons, getPersons] = useState<IEmployee[]>([]);

  useEffect(() => {
    const fetchPersonsRequest = async () => {
      try {
        const data = await getEmployees();
        getPersons(data);
      } catch {
        console.error("fetchPersonsRequest");
      }
    };
    void fetchPersonsRequest();
  }, []);

  return (
    <div className="Persons">
      <Button>
        <Link to="/persons/new">Добавить</Link>
      </Button>
      <table>
        <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчетсво</th>
            <th>Телефон</th>
            <th>Логин</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((x) => (
            <tr className="Persons-Row" key={x.idEmployee}>
              <td>
                <Link to="/persons/view/ivanovId">{x.surname}</Link>
              </td>
              <td>{x.name}</td>
              <td>{x.middleName}</td>
              <td>{x.phone}</td>
              <td>{x.login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Persons;
