// import "./App.css";
import React from "react";
import Header from "./components/Header";
import { title } from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import ArrayIntoObjects from "./components/ArrayIntoObjects";

function App() {
  return (
    <>
      <Card
        name={"CG BLAZE STUDIO"}
        year={1997}
        discription={
          "Hello Im an mobile app developer, currently learning react for my upcoming projects"
        }
      />
      <Card />
      <Button />
      <UserGreeting isLoggedin={false} userName="Karthik" />
      
      {/* <List/> */}
      <ArrayIntoObjects/>
    </>
  );
}

export default App;
