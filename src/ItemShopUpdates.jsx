import ItemCard from "./Card";
import DataFetcher from "./DataFetcher";

// const FORTNITE_API = "https://fortnite-api.com/v2/cosmetics/br/new";

function ShopUpdates() {
  return (
    <>
      <DataFetcher />
      <ItemCard />
    </>
  );
}

export default ShopUpdates;
