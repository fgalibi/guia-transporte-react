import React, { useEffect, useState } from "react";
import { getList } from "../../services/onibus";
import CardTransporte from "../CardTransporte";

const Onibus = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          className="form-control"
          placeholder="Qual ônibus você deseja pesquisar?"
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <div className="row">
        {list
          .filter(
            (elem) =>
              elem.nome.toUpperCase().includes(filter.toUpperCase()) ||
              filter === ""
          )
          .map((elem) => (
            <div className="col-md-3 mx-auto my-3" key={elem.id}>
              <CardTransporte
                title="Itinerário"
                id={`${elem.id}`}
                nome={`${elem.nome}`}
                url={`itinerario/${elem.id}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Onibus;
