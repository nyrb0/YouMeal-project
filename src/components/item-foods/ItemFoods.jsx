import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import PhotoFoods from '../photo-foods/PhotoFoods';
import itemFoodsClass from './ItemFoods.module.scss'
import { addToCart } from '../../purchased';
import FoodsBuy from '../foods-buy/FoodsBuy';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import DescAbout from '../desc-about-food/DescAbout';
const ItemFoods =({data})=>{
      const [open,setOpen]=useState(false)
      const handleOpenFunc = ()=>{
            setOpen(isOpen=>!isOpen)
      }
      return(
            <div className={itemFoodsClass.showTheFood}>
                  <div className={itemFoodsClass.box}>
                        <div className={itemFoodsClass.inner} onClick={handleOpenFunc}>
                              <div className={itemFoodsClass.imgFood}  >
                                    <div className={itemFoodsClass.contentImg}>
                                          <PhotoFoods img={data.url}/>
                                    </div>
                              </div>
                              <div className={itemFoodsClass.information}>
                                    <div className={itemFoodsClass.price}>
                                          {data.price} сом
                                    </div>
                                    <div className={itemFoodsClass.title}>
                                          {data.title}
                                    </div>
                                    <div className={itemFoodsClass.gram}>
                                          {data.weight}г
                                    </div>
                              </div>
                        </div>
                        <div className={itemFoodsClass.btn}>
                              <span><FoodsBuy data={data}/></span>
                        </div>
                        <div className={itemFoodsClass.modal}>
                              {open ? (<Modal isOpen={handleOpenFunc} infoData={data}>
                                    <DescAbout isOpen={handleOpenFunc} desc={data}/>
                                    </Modal>):null}
                        </div>
                  </div>
            </div>
      )
}
export default ItemFoods