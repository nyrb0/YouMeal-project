import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import PhotoFoods from '../photo-foods/PhotoFoods';
import itemFoodsClass from './ItemFoods.module.scss'
import { addToCart } from '../../purchased';
import FoodsBuy from '../foods-buy/FoodsBuy';
const ItemFoods =({data})=>{

      return(
            <div className={itemFoodsClass.showTheFood}>
                  <div className={itemFoodsClass.box}>
                        <div className={itemFoodsClass.imgFood}>
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
                        <div className={itemFoodsClass.btn}>
                              <FoodsBuy data={data}/>
                        </div>
                  </div>
            </div>
      )
}
export default ItemFoods