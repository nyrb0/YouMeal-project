import CounterButton from '../UI/Button/counter/CounterButton';
import PhotoFoods from '../photo-foods/PhotoFoods';
import selectedFoodClass  from './SelectedFood.module.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Amount from '../amount/Amount';
import Modal from '../Modal/Modal';
import DescAbout from '../desc-about-food/DescAbout';
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
                              <div className={selectedFoodClass.content} key={selected.id} >
                                    <div className={selectedFoodClass.line}>
                                    </div>                  
                                    <div className={selectedFoodClass.contentTwo}>
                                          <div className={selectedFoodClass.info} >
                                                <div className={selectedFoodClass.thePhoto}>
                                                      <img src={selected.url} alt="image"onClick={funcOpen} />
                                                </div>
                                                <div className={selectedFoodClass.description}>
                                                      <div className={selectedFoodClass.title}>
                                                            {selected.title}
                                                      </div>
                                                      <div className={selectedFoodClass.weight}>
                                                            { selected.weight || selected.weight.length ? `${selected.weight}г` : 'Неизвестно'}
                                                      </div>
                                                      <div className={selectedFoodClass.price}>
                                                            {selected.price}сом
                                                      </div>
                                                </div>
                                          </div>
                                          <Amount/>
                                    </div>
                                    {openIsTheSelectedClick ? (<Modal isOpen={funcOpen} infoData={selected}>
                                                            <DescAbout isOpen={funcOpen} desc={selected}/>
                                                            </Modal>):null}
                              </div>
                        )))}
                        
                  </div>
            </div>
      )
}

export default SelectedFood;