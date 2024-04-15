import CounterButton from '../UI/Button/counter/CounterButton';
import PhotoFoods from '../photo-foods/PhotoFoods';
import selectedFoodClass  from './SelectedFood.module.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Amount from '../amount/Amount';
import Modal from '../Modal/Modal';
import DescAbout from '../desc-about-food/DescAbout';
import ItemSelected from '../item-selected/ItemSelected';
const SelectedFood = ()=>{
      const inData = useSelector(state=>state.foodsCart.cartStateNow)
      const [openIsTheSelectedClick,setIsOpenTheSelectedClick]=useState(false)
      const funcOpen = ()=>{
            setIsOpenTheSelectedClick(open=>!open)
      }
      
      return(
            <div className={selectedFoodClass.theFood}>
                  <div className={selectedFoodClass.wrapper}>
                        {!inData.length ? (
                              <div className={selectedFoodClass.empty}>
                                    {"Тут пока пусто :("}
                              </div>
                        ):(
                        inData.map(selected=>(
                              <div key={selected.id}>
                                    <ItemSelected selected={selected}/>
                              </div>
                        )))}
                        
                  </div>
            </div>
      )
}

export default SelectedFood;