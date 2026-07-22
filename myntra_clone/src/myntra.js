import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/footer";
import arr from "./utils/dummy";

function App() {
  let [array,setArray] = useState(arr);

  const handleSort = ()=>{
    array.sort((a,b)=> a.price - b.price);
    setArray([...array])
  }

  const handleFilter = ()=>{
    let filterArr = arr.filter((val)=>val.price>=349);
    setArray(filterArr);
  }
  
  return (
    <>
      <Header />
      <div className="web-body">
        <button id="sort-button" onClick={handleSort}>sort by price</button>
        <button id="filter-button" onClick={handleFilter}>price above 349</button>
        <div className="main">
          {array.map((val, idx) => (
            <Card
              key={idx}
              link={val.src}
              clothe={val.clothe}
              offer={val.offer}
              price={val.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
