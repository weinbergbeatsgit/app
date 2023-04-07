import './App.css';
import Product from './components/productEntry';
import React, { useState } from 'react';
import ProductJson from './database/products.json';
import SchoppingCart from './components/shoppingCart';
import cloneDeep from 'lodash/cloneDeep';
import {useEffect} from 'react';


function App() {


  const [produkte, setProdukte] = useState(cloneDeep(ProductJson));
  const [result, setResult] = useState(0);
  const [appPfand, setAppPfand] = useState({
                                                   "name": "Pfand",
                                                   "price": 2.00,
                                                   "category":"All",
                                                   "variants": []
                                               });
  const [appErgebnis, setAppErgebnis] = useState({
                                                  "name": "Gesamt",
                                                  "price": 0.00,
                                                  "category":"All",
                                                  "variants": []
                                              });
  const [category, setCategory] = useState("All");

  const calResult = (productList) => {
    var i = 0;
    productList.map((thisProduct, index) => {
      return thisProduct.variants.map((thisVariant, index) => {
        if (!isNaN(thisVariant.anzahl)) {
          return i += (thisVariant.anzahl * thisVariant.price);
        }
      })
    })
    if(!isNaN(appPfand.anzahl)) {
        i += appPfand.anzahl*appPfand.price;
    }
    setResult(i);
    appErgebnis.price=i;
  }

  const initPage = async event => {
    setAll();
    reset();
  }

  const reset = () => {
    resetProducts();
     resetPfand();
    calResult(ProductJson);
  }

  const resetPfand = () => {
        setAppPfand(produkte[produkte.length -1])
        appPfand.anzahl = 0;
  }

  const resetProducts = () => {
    setProdukte(cloneDeep(ProductJson));
  }

  const setAll = () => {
    setCategory("All");
  }


  const setWelcome = () => {
    setCategory("Welcome");
  }


  const setWine = () => {
    setCategory("Wine");
  }

  const handleChanges = (product, index, pfand) => {
    produkte[index] = product;
     setAppPfand(pfand);
    calResult(produkte);
  }

  const formatPrice = (price) => {
      let tmpPrice = (price + "").split(".");
      if(tmpPrice[1] === null || tmpPrice[1] === undefined){
          tmpPrice[1] = "0";
      }

      return tmpPrice[0] + "," + tmpPrice[1] + '0';
  }

  return (
    <div className="flex-column height-100 overflow-hidden">
      <div className="flex-row align-center header-panel">
        <ul className="flex-row nav-bar">
          <li onClick={setAll} className={category === "All" ? 'active' : ''}>Alle</li>
          <li onClick={setWelcome} className={category === "Welcome" ? 'active' : ''}>Willkommensstand</li>
          <li onClick={setWine} className={category === "Wine" ? 'active' : ''}>Weinstand</li>
        </ul>
      </div>

      <div className="flex-row flex-grow">
        <div className="warenkorb">
          <SchoppingCart schoppingCart={produkte} pfand={appPfand} ergebnis={appErgebnis}/>
        </div>
        <div className="flex-column justify-space-between flex-grow">
          <div className="flex-column gap-10 main-content flex-grow">
            <div className="flex-row gap-30 flex-wrap">
              {produkte.map((thisProduct, index) => {
                if (category === "All" || category === thisProduct.category || thisProduct.category === "All") {
                  return (
                    <Product product={thisProduct} pfand={appPfand} childToParent={handleChanges} />
                  )
                }
              })

              }

            </div>
          </div>
          <div>
            <div className="flex-row justify-space-between align-center result-panel flex-grow">
              <div>
                <button onClick={reset}>Zurücksetzen</button>
              </div>
              <div>
                <h2>Gesamt: {formatPrice(result)} €</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
