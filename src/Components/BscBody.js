import React, { useContext } from "react";
import BscHeading from "./BscHeading";
import BscMain from "./BscMain";
import BscMain2 from "./BscMain2";
import {ThemeContext} from "../Context/theme"

export default function BscBody() {
  const [{theme,isDark},toggleTheme] = useContext(ThemeContext)
  return (
    <div id="bodybsc" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <BscHeading />
      <div className="seperator seperator-big"></div>
      <BscMain />
      <BscMain2 />
    </div>
  );
}
