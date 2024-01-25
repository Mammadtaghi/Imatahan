import { createContext, useContext } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";

const basketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [Basket, setBasket] = useLocalstorage("basket");

  function AddToBasket(item) {
    const index = Basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      item.count = 1;
      setBasket([...Basket, item]);
      return;
    }
    let BasketCopy = [...Basket];
    BasketCopy[index].count++;
    setBasket(BasketCopy);
  }

  function RemoveFromBasket(item) {
    const index = Basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      console.log("Not Here!");
      return;
    }
    setBasket(Basket.filter((x) => x._id !== item._id));
  }

  function Increase(item) {
    const index = Basket.findIndex((x) => x._id === item._id);
    let BasketCopy = [...Basket];
    BasketCopy[index].count++;
    setBasket(BasketCopy);
  }

  function Decrease(item) {
    const index = Basket.findIndex((x) => x._id === item._id);
    let BasketCopy = [...Basket];
    if (BasketCopy[index].count > 1) {
      BasketCopy[index].count--;
      setBasket(BasketCopy);
      return;
    }
  }

  function SubTotal() {
    const AllT = Basket.reduce(
      (subtotal, item) => (subtotal += item.count * +item.price),
      0
    );
    return AllT;
  }

  const data = {
    Basket,
    setBasket,
    AddToBasket,
    RemoveFromBasket,
    Increase,
    Decrease,
    SubTotal
  };

  return (
    <basketContext.Provider value={data}>{children}</basketContext.Provider>
  );
};

export const useBasket = () => useContext(basketContext);
