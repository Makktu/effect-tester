import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, []);

  // const buttonClickHandler = (type) => {
  //   setResourceType(type);
  // };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window, removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <div>
        <button onClick={() => buttonClickHandler("Posts")}>Posts</button>
        <button onClick={() => buttonClickHandler("Users")}>Users</button>
        <button onClick={() => buttonClickHandler("Comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })} */}
      {/* <div>Height: {windowHeight}</div> */}
      <div>Width: {windowWidth}</div>
    </>
  );
}
