import React from "react";
import { useSelector } from "react-redux";
import Checkbox from "../Atoms/Checkbox";
import "../Styles/FilterMenu.css";

/**
 * FilterMenu is is a component that shows the different Checkboxes you can
 * choose between.
 * @var phonePage is used to decide if the filter-component should be shown.
 */

const FilterMenu = () => {
  const phonePage: any = useSelector((state: any) => state.phonePage);

  return (
    <div id="filter-menu" className={phonePage}>
      <label>LANGUAGE</label>
      <Checkbox text="English" />
      <Checkbox text="Spanish" />

      <label>GENRE</label>
      <Checkbox text="Romace" />
      <Checkbox text="Horror" />

      <label>PUBLISHER</label>
      <Checkbox text="Wiley" />
      <Checkbox text="Aschehoug" />
    </div>
  );
};

export default FilterMenu;
