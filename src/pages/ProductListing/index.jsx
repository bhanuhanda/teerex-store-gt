import { useContext, useState } from "react";
import { DataContext } from "../../helpers/context";

import Search from "../../components/Search";
import RenderCards from "../../components/RenderCards";

import './ProductListing.css';

function Products() {
  const data = useContext(DataContext);
  const filteredData = data;

  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div id="products-page-wrapper">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RenderCards filteredData={filteredData} />
    </div>
  );
}

export default Products;
