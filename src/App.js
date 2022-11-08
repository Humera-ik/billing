import "./App.css";
import { useEffect, useState } from "react";

let nextId = 0;

export default function App() {
  const [itemName, setItemName] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("itemName");
    json && setItemName(JSON.parse(json));
  }, []);

  const handleItemNameChange = (event) => {
    const newItemName = event.target.value;
    setItemName(newItemName);
    try {
      const json = JSON.stringify(newItemName);
      localStorage.setItem("itemName", json);
    } catch (error) {
      console.error("", error);
    }
  };

  const [perUnitPrice, setPerUnitPrice] = useState(0);
  useEffect(() => {
    const json = localStorage.getItem("perUnitPrice");
    json && setPerUnitPrice(JSON.parse(json));
  }, []);

  const handlePerUnitPriceChange = (event) => {
    const newPerUnitPrice = event.target.value;
    setPerUnitPrice(newPerUnitPrice);
    try {
      const json = JSON.stringify(newPerUnitPrice);
      localStorage.setItem("perUnitPrice", json);
    } catch (error) {
      console.error("", error);
    }
  };

  const [qty, setQty] = useState(0);
  useEffect(() => {
    const json = localStorage.getItem("qty");
    json && setQty(JSON.parse(json));
  }, []);

  const handleQtyChange = (event) => {
    const newQty = event.target.value;
    setQty(newQty);
    try {
      const json = JSON.stringify(newQty);
      localStorage.setItem("qty", json);
    } catch (error) {
      console.error("", error);
    }
  };

  const price = perUnitPrice * qty;

  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const handleItemsClick = (event) => {
    const data = { itemName, perUnitPrice, qty, price };
    setItems([
      ...items,
      {
        id: nextId++,
        itemName: itemName,
        perUnitPrice: perUnitPrice,
        qty: qty,
        price: price,
      },
    ]);

    setTotal(total + price);
    setItemName("");
    setPerUnitPrice(0);
    setQty(0);
    console.log(data);
  };

  const handleEditClick = (event, index) => {
    const { name, value } = event.target;
    const data = [...items];
    data[index][name] = value;
    setItems(data);
  };

  return (
    <div className="App">
      <table className="Center">
        <thead>
          <tr align="center">
            <th scope="col">Item Name</th>
            <th scope="col">Per Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.perUnitPrice}€</td>
              <td>{item.qty}</td>
              <td>{item.price}€</td>
              <td>
                <button className="btn" type="button" onClick={handleEditClick}>
                  Edit
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    setTotal(total - item.price);
                    setItems(items.filter((i) => i.id !== item.id));
                  }}
                >
                  Delete Item
                </button>
              </td>
            </tr>
          ))}
          <tr align="center">
            <td>
              <input
                type="text"
                onChange={handleItemNameChange}
                value={itemName}
              />
            </td>
            <td>
              <input
                type="number"
                min={0}
                onChange={handlePerUnitPriceChange}
                value={perUnitPrice}
              />
              €
            </td>
            <td>
              <input
                type="number"
                min={0}
                onChange={handleQtyChange}
                value={qty}
              />
            </td>
            <td onchange={price} value={price}>
              {price}€
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="foot">
            <td align="center" colSpan={3}>
              <b>Total</b>
            </td>
            <td align="left" colSpan={3}>
              <b>{total}€</b>
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="btn" type="button" onClick={handleItemsClick}>
        Add Item
      </button>
      <button className="btn" type="button">
        Print Receipt
      </button>
    </div>
  );
}
