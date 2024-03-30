import Button from '../UI/Button/Button';
import PhotoFoods from '../photo-foods/PhotoFoods';
import itemFoodsClass from './ItemFoods.module.scss'
const ItemFoods =({data})=>{
      
      return(
            <div className={itemFoodsClass.showTheFood}>
                  <div className={itemFoodsClass.box}>
                        <div className={itemFoodsClass.imgFood}>
                              <PhotoFoods img={data.url}/>
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
                              <Button>Добавить</Button>
                        </div>
                        
                  </div>
            </div>
      )
}
export default ItemFoods