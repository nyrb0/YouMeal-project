import { useDispatch, useSelector } from 'react-redux';
import foodsBuyClass from './FoodsBuy.module.scss'
import Button from '../UI/Button/Button';
import { useState } from 'react';
import { delateToCart,addToCart } from '../../purchased';
const FoodsBuy = ({data})=>{
      const dispatch = useDispatch();
      const [active,setActive]=useState(false)
      const inSelected = useSelector(state=> state.foodsCart.cartStateNow)
      const handle = ()=>{
            setActive(active=>!active)
            if(active){
                  dispatch(delateToCart(data))
            }else{      
                  dispatch(addToCart(data))     
            }
      }
      return(
            <div className={foodsBuyClass.buyThis}>
                  <Button onClick={handle} first={active ?  "type-btn" : 'first'}>Выбрать</Button>
            </div>      
      )
}

export default FoodsBuy;