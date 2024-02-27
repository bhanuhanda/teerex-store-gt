import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../helpers/context";

import Search from "../../components/Search";
import RenderCards from "../../components/RenderCards";

import './ProductListing.css';
// import RenderFilters from "../../components/RenderFilters";

function Products() {
  const data = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);
  const [filterLabels, setFilterLabels] = useState({});
  const [searchAndFilterBy, setSearchAndFilterBy] = useState({
    searchQuery: '',
    filterByItems: []
  });

  const filterString = (str, qry) => {
    return str.toLowerCase().indexOf(qry.toLowerCase()) >= 0;
  }

  const setSearchQuery = (str) => {
    const temp = JSON.parse(JSON.stringify(searchAndFilterBy));
    temp.searchQuery = str;
    setSearchAndFilterBy(temp);
  }

  useEffect(() => {
    const buildFilters = (data) => {
      const colors = Array.from(new Set(data.map(record => record.color)));
      const genders = Array.from(new Set(data.map(record => record.gender)));
      const types = Array.from(new Set(data.map(record => record.type)));
  
      setFilterLabels(prev => ({ ...prev, colors, genders, types }));
    };

    buildFilters(data); // handle edge case if data length = 0
  }, [data])

  useEffect(() => {
    const searchInData = (data, s) => {
      return data.filter((record) => {
        return filterString(record.name, s) || filterString(record.type, s) || filterString(record.color, s);
      })
    }

    const s = searchAndFilterBy.searchQuery;
    if(s !== '') {
      setFilteredData(searchInData(data, s));
    } else {
      setFilteredData(data);
    }
  }, [searchAndFilterBy.searchQuery, searchAndFilterBy.filterByItems, data])

  return (
    <div id="products-page-wrapper">
      <Search searchQuery={searchAndFilterBy.searchQuery} setSearchQuery={(str) => setSearchQuery(str)} />
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
