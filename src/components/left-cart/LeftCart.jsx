
import SelectedFood from '../selected-food/SelectedFood';
import cartClass from './LeftCart.module.scss'
import { useSelector } from 'react-redux';
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
                              <SelectedFood/>
                        </div> 
                  </div>     
            </div>
      )
}
export default LeftCart;