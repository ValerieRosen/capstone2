import { useEffect, useState } from "react";

// const fetchItems = async () => {
//   const [items, setItems] = useState([]);
//   const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");
//   const allItems = await data.json();
//   setItems(allItems.data);
//   useEffect(() => {
//     fetchItems();
//   }, []);
//   return (
//     <div>
//       {items.map((item, index) => {
//         return <p key={item.itemId}>{item.item.name}</p>;
//       })}
//     </div>
//   );
// };

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fortnite-api.com/v2/cosmetics/br/new")
      .then((response) => response.json())
      .then((data) => setData({ data }))
      .catch((err) => console.log(err));
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fortnite-api.com/v2/cosmetics/br/new"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.items &&
            data.items.map((items) => (
              <li key={[items.id]}>
                {items.name}
                {items.description}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
export default DataFetcher;
