import { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const url = "https://fortnite-api.com/v2/news/br";

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
            <div key={items.id}>
              console.log(data)
              <div key={items}>
                <ul>{items.name}</ul>
              </div>
            </div>
          );
        })}
    </>
  );
}
