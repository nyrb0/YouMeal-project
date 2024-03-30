
import cartClass from './LeftCart.module.scss'

const LeftCart = ({count})=>{

      return(
            <div className={cartClass.blockCart} > 
                  <div className={cartClass.amount}>
                        <div className={cartClass.title}>
                              Корзина
                        </div>
                        <div className={cartClass.count}>
                              {count}
                        </div>
                        <div className={cartClass.bought}>
                              
                        </div>      
                  </div>
            </div>
      )
}
export default LeftCart;