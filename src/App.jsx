import { Route, Router, Routes } from "react-router-dom"
import PageHamburger from "./PAGES/hamburger-page/PageHamburger"
import Header from "./components/Header/Header"
import ItemFoods from "./components/item-foods/ItemFoods"
import Structure from "./components/structure/Structure"
import LeftCart from "./components/left-cart/LeftCart"
import { Provider } from "react-redux"
import store from "./cartFoodStore"
function App() {
  

  return (
    <Provider store={store}>
      <div className="app"> 
            <Header/>
        <div className="container">
          <main>
            <div className="app_content">
              <div>
                <LeftCart />
              </div>
              <Routes>
                <Route path={'/hamburger'} element={<PageHamburger/>}/>
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Provider>


  )
}

export default App
