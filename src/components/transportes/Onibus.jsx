import React, { useEffect, useState } from "react";
import { getList } from "../../services/onibus";
import CardTransporte from "../CardTransporte";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const Onibus = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    let mounted = true;
    toast.loading("Carregando...", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    getList()
      .then((items) => {
        if (mounted) {
          setList(items);
        }
      })
      .catch(() => {
        toast.error("Falha ao buscar lista de ônibus.");
      })
      .finally(() => {
        toast.dismiss();
      });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    function filterItems() {
      return list.filter(
        (elem) =>
          elem.nome.toUpperCase().includes(filter.toUpperCase()) ||
          filter === ""
      );
    }

    const endOffset = itemOffset + itemsPerPage;
    const items = filterItems();

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [filter, itemOffset, list]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
      <div className="mx-auto">
        <input
          className="form-control col-md-12"
          placeholder="Qual ônibus você deseja pesquisar?"
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      {currentItems && currentItems.length > 0 ? (
        <div className="row">
          {currentItems.map((elem) => (
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
      ) : (
        <div className="container">
          <p className="py-5">Não foram encontrados resultados.</p>
        </div>
      )}

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

export default Onibus;
