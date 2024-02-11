import { useContext } from "react";
import { DataContext } from "../helpers/context";

import Search from "../components/Search";

function Products() {
  const data = useContext(DataContext);
  console.log({ data })
  
  return (
    <>
      <Search />
    </>
  );
}

export default Products;
