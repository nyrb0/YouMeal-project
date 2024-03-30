
import cartClass from './LeftCart.module.scss'

const LeftCart = ({count})=>{

      return(
            <div className={cartClass.blockCart}> 
                  <div className={cartClass.wrapper}>
                        <div className={cartClass.cart}>
                              <div className={cartClass.cartHeader}>
                                    <div className={cartClass.title}>
                                          Корзина
                                    </div>
                                    <div className={cartClass.amount}>
                                          {count}4
                                    </div>
                              </div>
                              <div className={cartClass.line}>
                              </div>
                        </div>
                        <div className={cartClass.bought}>
                        </div> 
                  </div>     
            </div>
      )
}
export default LeftCart;