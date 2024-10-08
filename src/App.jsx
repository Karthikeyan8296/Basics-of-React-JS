// import "./App.css";
import React from "react";
import Header from "./components/Header";
import { title } from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import ArrayIntoObjects from "./components/ArrayIntoObjects";
import ProfilePicture from "./components/ProfilePicture";
import UseStateComponent from "./components/UseStateComponent";
import Counter from "./components/Counter";
import OnChangeComponent from "./components/OnChangeComponent";
import ColorPicker from "./components/ColorPicker";
import CounterUpdater from "./components/CounterUpdater";
import UpdateObjects from "./components/UpdateObjects";
import UpdateStateArray from "./components/UpdateStateArray";
import UpdateArrayObjects from "./components/UpdateArrayObjects";
import TodoApp from "./components/TodoApp";
import UseEffectHook from "./components/UseEffectHook";
import ResponsiveUseEffect from "./components/ResponsiveUseEffect";
import ComponentA from "./components/UseContextComp/ComponentA";
import UseRef from "./components/UseRef";

function App() {
  const fruits = [
    { id: 1, name: "red", calories: 50 },
    { id: 2, name: "yellow", calories: 20 },
    { id: 3, name: "orange", calories: 15 },
    { id: 4, name: "mango", calories: 24 },
    { id: 5, name: "pineapple", calories: 58 },
    { id: 6, name: "banana", calories: 45 },
  ];

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
      <ArrayIntoObjects items={fruits} category="fruits :" />

      <ProfilePicture></ProfilePicture>
      <UseStateComponent></UseStateComponent>

      <Counter></Counter>
      <OnChangeComponent></OnChangeComponent>

      <ColorPicker />

      <CounterUpdater />

      <UpdateObjects />

      <UpdateStateArray />

      <UpdateArrayObjects />

      <TodoApp />

      <UseEffectHook />

      <ResponsiveUseEffect />

      <ComponentA />

      <UseRef/>
    </>
  );
}

export default App;
