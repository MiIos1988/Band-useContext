import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";
export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState([]);
  const getData = (dataFun) => {
    setModal(dataFun);
    document.querySelector(".content").style.display = "block";
  };
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json"
    )
      .then((prom) => prom.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <Header />
      <DataContext.Provider value={getData}>
        <Content data={data} getData={getData} />
      </DataContext.Provider>
      <Modal modal={modal} />
    </div>
  );
}

export default App;
