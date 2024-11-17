import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setShop(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <MyContext.Provider value={{ shop, loading, error }}>
      {children}
    </MyContext.Provider>
  );
}