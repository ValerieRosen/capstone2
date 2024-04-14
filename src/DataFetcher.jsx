import { useEffect, useState } from "react";

const cardStyle = {
  cardMain: {
    maxWidth: "300px",
    maxHeight: "300px",
    margin: "10px",
  },

  cardImage: {
    height: "150px",
    marginLeft: "7px",
    marginRight: "7px",
    marginTop: "5px",
  },
};

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

// const DataFetcher = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://fortnite-api.com/v2/cosmetics/br/new")
//       .then((response) => response.json())
//       .then((data) => setData({ data }))
//       .catch((err) => console.log(err));
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://fortnite-api.com/v2/cosmetics/br/new"
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       const data = await response.json();
//       setData(data);
//       console.log(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

export default function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const url = "https://fortnite-api.com/v2/cosmetics/br/new";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getItemList();
  }, []);

  return (
    <>
      {data.items &&
        data.map(([items]) => {
          return (
            <div style={cardStyle} key={items.id}>
              <ul>{items.name}</ul>
            </div>
          );
        })}
    </>
  );
}

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {data.items &&
//             data.map((items) => (
//               <li key={[items]}>
//                 {data}
//                 {items.description}
//               </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch("https://https://fortnite-api.com/v2/cosmetics/br/new")
//     .then((response) => response.json())
//     .then((data) => setData(data));
// }, []);
// return (
//   <div>
//     <h1>Hi</h1>
//     <ul>
//       {data.map((items) => {
//         return <li key={items}>{items.id}</li>;
//       })}
//     </ul>
//   </div>
// );
// }
