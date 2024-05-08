import { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const url = "https://fortnite-api.com/v2/cosmetics/br/new";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(data.build);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getItemList();
  }, []);
  console.log(data.build);
  return (
    <>
      {data.items &&
        data.map(([items]) => {
          return (
            <div key={items.id}>
              <div key={items}>
                <ul>{items.name}</ul>
              </div>
            </div>
          );
        })}
    </>
  );
}
