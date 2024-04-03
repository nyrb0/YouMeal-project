
import SelectedFood from '../selected-food/SelectedFood';
import TotalAmount from '../total-amount/TotalAmount';
import cartClass from './LeftCart.module.scss'
import { useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
const LeftCart = (   )=>{
      const countTheCart = useSelector(state=> state.foodsCart.cartStateNow)
      return(
            <div className={cartClass.blockCart}> 
                  <div className={cartClass.wrapper}>
                        <div className={cartClass.cart}>
                              <div className={cartClass.cartHeader}>
                                    <div className={cartClass.title}>
                                          Выбрано
                                    </div>
                                    <div className={cartClass.amount}>
                                          {countTheCart.length}
                                    </div>
                              </div>
                              <div className={cartClass.line}>
                              </div>
                        </div>
                        <div className={cartClass.bought}>
                              <div>
                              <SelectedFood/>
                              </div>
                        </div> 
                        {countTheCart.length > 0 ?
                        (<span>
                        <TotalAmount totalPrice={countTheCart}/>
                        <Button>Оформить заказ</Button>
                        <div className={cartClass.freeOrder} style={{display:'flex',alignItems:'center'}}>
                              <img src="/icons/freeOrder.svg" alt="Бесплатная доставка" style={{paddingRight:'8px'}} />
                              Бесплатная доставка
                        </div>
                        </span>
                        ):null}
                  </div>     
            </div>
      )
}
export default LeftCart;