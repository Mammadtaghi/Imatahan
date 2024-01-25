import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

const proContext = createContext();

export const ProProvider = ({ children }) => {
  const [Pro, setPro] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  async function GetPros() {
    try {
      const response = await axios.get("http://localhost:3000/pro");
      console.log(response.data);
      setPro(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetPros();
  }, []);

  const data = { Pro, setPro, GetPros, isLoading };

  return <proContext.Provider value={data}>{children}</proContext.Provider>;
};

export const usePro = () => useContext(proContext);
