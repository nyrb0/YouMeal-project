import Structure from "../../components/structure/Structure";
import pageHambur from './PageHamburger.module.scss'

const PageHamburger = ()=>{

      return(
            <div className={pageHambur.page}> 
                  <div className={pageHambur.nameMenu}>
                        Бургеры
                  </div>
                  <Structure urlToData={"http://localhost:3000/burgersData"}/>
            </div>
      )
}
export default PageHamburger;