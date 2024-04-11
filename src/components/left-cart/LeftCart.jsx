
import SelectedFood from '../selected-food/SelectedFood';
import TotalAmount from '../total-amount/TotalAmount';
import cartClass from './LeftCart.module.scss'
import { useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Exit from '../UI/Button/exit/Exit';
import Input from '../UI/input/Input';
import Checkbox from '../UI/checkbox/Checkbox';
const LeftCart = (   )=>{
      const countTheCart = useSelector(state=> state.foodsCart.cartStateNow)
      const [order,setOrder]=useState(false)
      const [isScreen ,setIsScreen] = useState(false)
      const [openMenuList,setOpenMenuList]=useState(false)
      const openToOrder = ()=>{
            setOrder(order=>!order)
      }
      useEffect(()=>{
            const handleResize = ()=>{
                  setIsScreen(window.innerWidth >=991)
            }
            handleResize()
            window.addEventListener('resize',handleResize)

            return ()=>{
                  window.removeEventListener('resize',handleResize)
            }
      },[])
      const handleOpenTheMenu = ()=>{
            setOpenMenuList(open=>!open)
      }
      
      
      return(
            <div className={cartClass.blockCart}> 
                  <div className={cartClass.wrapper}>
                        <div className={cartClass.cart}>
                              <div className={cartClass.cartHeader} onClick={()=>setOpenMenuList(true)}>
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
                        {isScreen ? 
                        (<span>
                              <div className={cartClass.bought}>
                                    <div>
                                          <SelectedFood/>
                                    </div>
                              </div> 
                        <TotalAmount totalPrice={countTheCart}/>
                        <Button first={'order'} onClick={openToOrder}>Оформить заказ</Button>
                        <div className={cartClass.freeOrder} style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
                              <div style={{display:"flex",alignItems:"center"}}>
                                    <img src="/icons/freeOrder.svg" alt="Бесплатная доставка" style={{paddingRight:'8px'}} />
                                    Бесплатная доставка
                              </div>
                        </div>
                        </span>
                        ):(
                              <div> 
                                    {openMenuList &&(
                                          <div>
                                                <div className={cartClass.bought}>
                                                      <div>
                                                            <SelectedFood/>
                                                      </div>
                                                </div> 
                                                <TotalAmount totalPrice={countTheCart}/>
                                                <Button first={'order'} onClick={openToOrder}>Оформить заказ</Button>
                                                <div className={cartClass.freeOrder} style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
                                                <div style={{display:"flex",alignItems:"center"}}>
                                                <img src="/icons/freeOrder.svg" alt="Бесплатная доставка" style={{paddingRight:'8px'}} />
                                                      Бесплатная доставка
                                                </div>
                                                <div className={cartClass.putAway} onClick={handleOpenTheMenu}>
                                                      свернуть
                                                </div>
                                                </div>
                                          </div>
                                    )}
                              </div>
                        )}
                  </div>     
                  {order ? 
                  <Modal>
                        <div className={cartClass.order}>   
                              <div className={cartClass.exit}>
                                    <Exit onClick={openToOrder}/>
                              </div>
                              <div className={cartClass.orderWrapper}>
                                    <div className={cartClass.orangeBgLeft}>
                                          <div className={cartClass.donut}>
                                                <img src="/icons/pic.png" alt="" />
                                          </div>
                                    </div>
                                    <div className={cartClass.right}>
                                          <div className={cartClass.delivery}>
                                                Доставка
                                          </div>
                                          <div className={cartClass.writeData}>
                                                <div className={cartClass.nameUser}>
                                                      <Input placeholder={'Ваше имя'}/>
                                                </div>
                                                <div className={cartClass.numUser}>
                                                      <Input placeholder={'Телефон'}/>
                                                </div>
                                                <div className={cartClass.checkbox} >
                                                      <label>
                                                            <div className={cartClass.selfDelivery}>
                                                                  <Checkbox/><span></span>Самовывоз
                                                            </div>
                                                            <div className={cartClass.deliveryTo}>
                                                                  <Checkbox/><span>Доставка</span>
                                                            </div>
                                                      </label>
                                                </div>
                                                <div className={cartClass.address1}>
                                                      <Input placeholder={'Улица, дом, квартира'}/>
                                                </div>
                                                <div className={cartClass.address2}>
                                                      <div className={cartClass.floor}>
                                                            <Input placeholder={'Этаж'}/>
                                                      </div>
                                                      <div className={cartClass.addressNumber}>
                                                            <Input placeholder={'Домофон'}/>
                                                      </div>                                                  
                                                </div>
                                          </div>
                                          <div className={cartClass.implement}>
                                                <Button first={"order"}>Оформить</Button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Modal>:null}
            </div>      
      )
}
export default LeftCart