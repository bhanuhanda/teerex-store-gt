import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../helpers/context";

import Search from "../../components/Search";
import RenderCards from "../../components/RenderCards";

import './ProductListing.css';
// import RenderFilters from "../../components/RenderFilters";

function Products() {
  const [filterLabels, setFilterLabels] = useState({});
  const [searchAndFilterBy, setSearchAndFilterBy] = useState({
    searchQuery: '',
    filterByItems: []
  });
  
  const data = useContext(DataContext);
  const filteredData = data;

  useEffect(() => {
    const buildFilters = (data) => {
      const colors = Array.from(new Set(data.map(record => record.color)));
      const genders = Array.from(new Set(data.map(record => record.gender)));
      const types = Array.from(new Set(data.map(record => record.type)));
  
      setFilterLabels(prev => ({ ...prev, colors, genders, types }));
    };

    buildFilters(data); // handle edge case if data length = 0
  }, [data])

  // useEffect(() => {

  // }, [searchAndFilterBy.searchQuery, searchAndFilterBy.filterByItems])
  
  return (
    <div id="products-page-wrapper">
      <Search searchAndFilterBy={searchAndFilterBy} setSearchAndFilterBy={setSearchAndFilterBy} />
      {/* {Object.keys(filterLabels).length > 0 && 
        <RenderFilters 
          filterLabels={filterLabels} 
          searchAndFilterBy={searchAndFilterBy} 
          setSearchAndFilterBy={setSearchAndFilterBy} 
        />} */}
      <RenderCards filteredData={filteredData} />
    </div>
  );
}

export default Products;
