import './App.css'
import Card from './components/Card/Card'
// import {useEffect, useState} from 'react';

function App() {
  const item1 = {
    name: "Fry",
    image: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/6665973-%24%20%282%29.png"
  }

  const item2 = {
    name: "Bender",
    image: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/6665970-%24%20%281%29.png"
  }

  const item3 = {
    name: "Leela",
    image: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/6665972-%24%20%285%29.png"
  }

  const item4 = {
    name: "Dr. Zoidberg",
    image: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/6665976-%24%20%286%29.png"
  }

  const itens  = [item1, item2, item3, item4]

  // export default function App() {
  // const [data, setData] = useState("");
  // const getData = async () => {
  //   const resp = await fetch('https://api.sampleapis.com/futurama/info');
  //   const json = await resp.json();
  //   setData(json);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);


  return (
    <>
      <div className="cards">
        {/* {<Card item={item1} teste={1}/>
        <Card item={item2}  />*
        <Card item={item3}  />*/} 
        {itens.map((item, i) => <Card item={item} key={i} />)}
      </div>
    </>
  )
}

export default App