import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: Fry,
    image: "https://comicvine.gamespot.com/a/uploads/square_small/11/114183/6665973-%24%20%282%29.png"

  }

  const itens  = [item1, item2, item3]

  return (
    <>
      <div className="cards">
        {/* {<Card item={item1} teste={1}/>
        <Card item={item2}  />*
        <Card item={item3}  />*/} 
        {itens.map(item => <Card item={item} />)}
      </div>
    </>
  )
}

export default App