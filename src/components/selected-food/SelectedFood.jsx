import CounterButton from '../UI/Button/counter/CounterButton';
import PhotoFoods from '../photo-foods/PhotoFoods';
import selectedFoodClass  from './SelectedFood.module.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const SelectedFood = ()=>{
      const inData = useSelector(state=>state.foodsCart.cartStateNow)

      const [quantity,setQuantity]=useState(0)

      const upQuantity = ()=>{
            setQuantity(count=> count+1)
      }
      const downQuantity = ()=>{
            if(quantity === 0) return 0
            setQuantity(count=> count-1)
      }
      return(
            <div className={selectedFoodClass.theFood}>
                  <div className={selectedFoodClass.wrapper}>
                        {!inData.length ? (
                              <div className={selectedFoodClass.empty}>
                                    {"Корзина пуста("}
                              </div>
                        ):(
                        inData.map(selected=>(
                              <div className={selectedFoodClass.content} key={selected.id}>
                                    <div className={selectedFoodClass.info}>
                                          <div className={selectedFoodClass.thePhoto}>
                                                <img src={selected.url} alt="" />
                                          </div>
                                          <div className={selectedFoodClass.description}>
                                                <div className={selectedFoodClass.title}>
                                                      {selected.title}
                                                </div>
                                                <div className={selectedFoodClass.weight}>
                                                      {selected.weight}г
                                                </div>
                                                <div className={selectedFoodClass.price}>
                                                      {selected.price}сом
                                                </div>
                                          </div>
                                    </div>
                                    <div className={selectedFoodClass.amount}>
                                          <CounterButton onClick={downQuantity}>-</CounterButton>
                                          <div className={selectedFoodClass.quantity}>
                                                {quantity}
                                          </div>
                                          <CounterButton onClick={upQuantity}>+</CounterButton>
                                    </div>
                              </div>
                        )))}
                  </div>
            </div>
      )
}

export default SelectedFood;