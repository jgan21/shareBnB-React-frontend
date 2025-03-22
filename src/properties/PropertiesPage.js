import React, { useState, useEffect } from "react";
import ShareBnB from '../api/api';
import PropertyCard from "./PropertyCard";
import SearchForm from "../common/SearchForm";

/** Display all properties.
 *
 * Props:
 * - properties
 * [{ id, name, address, backyard, pool, description, price, user_id }, ...]
 * - search: function to call in parent
 *
 * State:
 * - none.
 *
 * RoutesList -> PropertiesPage -> PropertyCard
 */

function PropertiesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  /** getPropertiesOnMount: Executes search without a search term. */

  useEffect(function getPropertiesOnMount() {
    console.log('useEffect getPropertiesOnMount');
    search();
  }, []);

  /** search: Makes a request to API for properties that matches search term.*/

  async function search(term){
    console.log("App search term=", term)
    const { properties } = await ShareBnB.getProperties(term);
    console.log("search properties", properties)
    setProperties(properties);
    setIsLoading(false);
  }

  if (isLoading === true) return <p>Loading...</p>;

  console.log('PropertiesPage properties=', properties);
  return (
    <div className="row">
      <SearchForm search={search} />
      {properties.map(p => <PropertyCard property={p} search={search}/>)}
    </div>
  )
}

export default PropertiesPage;