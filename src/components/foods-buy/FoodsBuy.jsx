import { useDispatch, useSelector } from 'react-redux';
import foodsBuyClass from './FoodsBuy.module.scss'
import Button from '../UI/Button/Button';
import { useState } from 'react';
import { delateToCart,addToCart } from '../../purchased';
const FoodsBuy = ({data})=>{
      const dispatch = useDispatch();
      const inSelected = useSelector(state=> state.foodsCart.cartStateNow)
      const isInSelected = inSelected.some(item=>item.id === data.id)
      const handle = ()=>{
            if(isInSelected){
                  dispatch(delateToCart(data))
            }else{      
                  dispatch(addToCart(data))
            }
      }
      return(
            <div className={foodsBuyClass.buyThis}>
                  <Button onClick={handle} first={isInSelected ?  "type-btn" : 'first'}>{isInSelected ? 'Выбрано': 'Выбрать'}</Button>
            </div>      
      )
}

export default FoodsBuy;