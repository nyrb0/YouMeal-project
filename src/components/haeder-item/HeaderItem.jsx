
import headerItemClass from './HeaderItem.module.scss'
import hamburger from '/public/hamburger.png'

const HeaderItem = ()=>{      
      
      return(
            <div className={headerItemClass.items}>
                  <div className={headerItemClass.contentHeader}>
                        <div className={headerItemClass.hamburger}>
                              <img src={hamburger} alt="гамбургер" />
                        </div>
                        <div className={headerItemClass.text}>
                              <h1>
                                    Только самые <br /> <span>сочные бургеры!</span>
                              </h1>
                              <div className={headerItemClass.deliveryOrder}>
                                    Бесплатная доставка от <span>599сом</span>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default HeaderItem;