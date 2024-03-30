import Header from "./components/Header/Header"
import ItemFoods from "./components/item-foods/ItemFoods"
import Structure from "./components/structure/Structure"

function App() {
  

  return (
    <div className="app"> 
          <Header/>
      <div className="container">
        <main>
          <Structure/>
        </main>
      </div>
    </div>

  )
}

export default App
