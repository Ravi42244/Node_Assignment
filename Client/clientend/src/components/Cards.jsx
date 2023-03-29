import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";

const Cards = (props) => {
  const [reportTO_display, setreportTO_display] = useState(false);
  const [ids, setids] = useState(props.data.reportTo);

  useEffect(() => {
    setids(props.data.reportTo);
  }, [props.data]);

  useEffect(() => {
    if (props.data.reportTo) {
      setreportTO_display(true);
    } else setreportTO_display(false);
  }, [props.data]);

  return (
    <div className="container text-center">
      <div className="row my-5">
        <div className="col">
          {props.data.firstName ? (
            <Card
              firstName={props.data.firstName}
              lastName={props.data.lastName}
              email={props.data.email}
              role={props.data.role}
            />
          ) : (
            <>User Not Found!</>
          )}
        </div>
      </div>

      {reportTO_display === true ? (
        <div className="row">
          {ids.map((data, i) => {
            return (
              <div className="col" key={i}>
                <Card
                  firstName={data.firstName}
                  lastName={data.lastName}
                  email={data.email}
                  role={data.role}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cards;
