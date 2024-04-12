import { Route, Router, Routes } from "react-router-dom"
import PageHamburger from "./PAGES/hamburger-page/PageHamburger"
import Header from "./components/Header/Header"
import ItemFoods from "./components/item-foods/ItemFoods"
import Structure from "./components/structure/Structure"
import LeftCart from "./components/left-cart/LeftCart"
import { Provider } from "react-redux"
import store from "./cartFoodStore"
import Footer from "./components/footer/Footer"
import PageSnacks from "./PAGES/snacks-page/PageSnacks"
import HotDogs from "./PAGES/hot-dogs/HotDogs"
import PageCombo from "./PAGES/page-combo/PageCombo"
import PageShawarma from "./PAGES/page-shawarma/PageShawarma"
import PagePizza from "./PAGES/page-pizza/PagePizza"
import PageWok from "./PAGES/page-wok/PageWok"
import PageDessert from "./PAGES/page-dessert/PageDessert"
import PageSauce from "./PAGES/page-sauce/PageSauce"
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
                <Route path={'/snacks'} element={<PageSnacks/>}/>
                <Route path={'/snacks'} element={<PageSnacks/>}/>
                <Route path={'/hotDogs'} element={<HotDogs/>}/>
                <Route path={'/combo'} element={<PageCombo/>}/>
                <Route path={'/shawarma'} element={<PageShawarma/>}/>
                <Route path={'/pizza'} element={<PagePizza/>}/>
                <Route path={'/wok'} element={<PageWok/>}/>
                <Route path={'/dessert'} element={<PageDessert/>}/>
                <Route path={'/sauce'} element={<PageSauce/>}/>
              </Routes>
            </div>
          </main>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </Provider>


  )
}

export default App
