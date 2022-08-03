import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState([]);

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
      <Content data={data} />
    </div>
  );
}

export default App;
