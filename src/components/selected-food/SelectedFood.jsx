import CounterButton from '../UI/Button/counter/CounterButton';
import PhotoFoods from '../photo-foods/PhotoFoods';
import selectedFoodClass  from './SelectedFood.module.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Amount from '../amount/Amount';
const SelectedFood = ()=>{
      const inData = useSelector(state=>state.foodsCart.cartStateNow)
      const [quantity,setQuantity]=useState(
            inData.map(item=> ({...item, quantityCount:0}))
      ); 
      const upQuantity = ()=>{
            setQuantity(prevQuantity=> prevQuantity.map(item=>({
                  ...item,quantityCount: item.quantityCount+1
            })))  
      }
      console.log(quantity)
      return(
            <div className={selectedFoodClass.theFood}>
                  <div className={selectedFoodClass.wrapper}>
                        {!inData.length ? (
                              <div className={selectedFoodClass.empty}>
                                    {"Тут пока пусто :("}
                              </div>
                        ):(
                        inData.map(selected=>(
                              <div className={selectedFoodClass.content} key={selected.id}>
                                    <div className={selectedFoodClass.line}>
                                    </div>                  
                                    <div className={selectedFoodClass.contentTwo}>
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
                                          <Amount/>
                                    </div>
                              </div>
                        )))}
                        
                  </div>
            </div>
      )
}

export default SelectedFood;