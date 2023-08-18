import React, { useState } from "react";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";
import Search from "../Components/Search";
import "../styles/Card.css";

const LostPage = () => {
  const [lostState, setLostState] = useState(false);
  const updateItemLost = () => {
    setLostState(!lostState);
  };

  const [search, setSearch] = useState("");
  const updateSearch = (txt) => {
    setSearch(txt);
  };

  return (
    <div
      className="lostCard"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
   <NavBar updateItemLost={updateItemLost}  navItem="Found Something ?"  cardType="lost"/>
      {lostState && <Card updateItemLost={updateItemLost} returnTo="lostPage" />}
      <Search updateSearch={updateSearch} />
      <ListItem searchText={search} section={"LOST"} />
    </div>
  );
};

export default LostPage;
