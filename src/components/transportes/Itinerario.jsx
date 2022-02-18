import React, { useEffect, useState } from "react";
import { find } from "../../services/itinerario";
import { useParams } from "react-router-dom";

const Itinerario = (props) => {
  const { id } = useParams();
  const [itinerario, setItinerario] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    find(id).then((items) => {
      if (mounted) {
        setItinerario(items);
        console.log(items);

        let arr = Object.keys(items)
          .filter((key) => {
            return !isNaN(key);
          })
          .map((key) => ({
            type: key,
            value: items[key],
          }));
        setList(arr);
      }

      //
    });
    return () => (mounted = false);
  }, [id]);

  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Paradas</th>
            <th scope="col">Localidade</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>Ponto {item.type}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/?q=${item.value.lat},${item.value.lng}`,
                      "_blank"
                    )
                  }
                >
                  Ver no Google Maps
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itinerario;
