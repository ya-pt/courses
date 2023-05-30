import React from "react";
import { useState } from "react";
import { Container } from "@mui/material";

//компоненты
import BasketList from "../components/BasketList";
import GoodsList from "./GoodsList";
import Search from "./Search";
import Header from "./Header";

//переменные
import { goods } from "../data/goods";

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(goods);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  // строим на основе material
  return (
    <div className="App">
      <Header />
      <Container
        sx={{
          mt: "1rem", //margin-top
        }} //свойство sx может определить стили компонента непосредственно в JSX
      >
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
        <BasketList order={order} setOrder={removeFromOrder} />
      </Container>{/* предоставляет гибкую обертку */}
    </div>
  );
};

export default App;