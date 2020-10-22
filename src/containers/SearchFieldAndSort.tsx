import React from "react";
import SearchField from "../atoms/SearchField";
import { MdSwapVert } from "react-icons/md";
import "../styles/SearchField.css";
import { useSelector } from "react-redux";

/**
 * SearchFiledAndSort is a component that contains the searchfield and the
 * button and dropdown for sorting elements.
 * @var phonePage is used to decide if the search-field and sort-button
 * should be shown.
 */

const SearchFieldAndSort = () => {
  const phonePage: any = useSelector((state: any) => state.phonePage.phonePage);

  return (
    <div id="search-field-and-sort-container" className={phonePage}>
      <SearchField />
      <div className="dropdown">
        <button className="dropdown-button red-button">
          <MdSwapVert size="30px" />
        </button>
        <div className="dropdown-content">
          <button className="red-button">Title (A-Z)</button>
          <button className="red-button">Title (Z-A)</button>
          <button className="red-button">Published (new-old)</button>
          <button className="red-button">Published (old-new)</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFieldAndSort;
