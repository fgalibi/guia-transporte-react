import React, { useEffect, useState } from "react";
import { find } from "../../services/itinerario";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const Itinerario = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    let mounted = true;
    toast.loading("Carregando...", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    find(id)
      .then((items) => {
        if (mounted) {
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
      })
      .catch(() => {
        toast.error("Falha ao buscar itinerário.");
      })
      .finally(() => {
        toast.dismiss();
      });
    return () => (mounted = false);
  }, [id]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [list, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;

    setItemOffset(newOffset);
  };

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
          {currentItems.map((item, index) => (
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
      <div className="row">
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          previousLabel="< Anterior"
          nextLabel="Próximo >"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Itinerario;
