import React from "react";
import "./Blurb.scss";

const blurbs = [
    {
      Name: "Раскрутка сайта",
      Cost: "14000",
      Manager: "Иванов ",
      Advertiser: "ИП Мигачев",
      
    },
    {
        Name: "Контекстная реклама",
        Cost: "20000",
        Manager: "Карпенко",
        Advertiser: "ИП Илларионов",
    },
    {
        Name: "Баннер",
        Cost: "12000",
        Manager: "Петров ",
        Advertiser: "ИП Иванов",
    },
  ];
  
  function Blurbs() {
    return (
      <div className="Blurb">
        <table>
            <tr>
                <th>Название</th>
                <th>Стоимост</th>
                <th>Менеджер</th>
                <th>Рекламодатель</th>
                
            </tr>
          {blurbs.map((x) => (
            <tr className="Blurb-Row">
              <td>{x.Name}</td>
              <td>{x.Cost}</td>
              <td>{x.Manager}</td>
              <td>{x.Advertiser}</td>
              
            </tr>
          ))}
        </table>
      </div>
    );
  }
  
  export default Blurbs;