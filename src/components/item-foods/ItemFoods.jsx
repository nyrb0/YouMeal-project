import itemFoodsClass from './ItemFoods.module.scss'
const ItemFoods =({data})=>{
      console.log(data);
      return(
            <div className={itemFoodsClass.showTheFood}>

                  <div className={itemFoodsClass.box}>
                        <div className={itemFoodsClass.imgFood}>
                              <img src={data.url} alt="Бургер" />
                        </div>
                        <div className={itemFoodsClass.price}>
                              {data.price}
                        </div>
                        <div className={itemFoodsClass.gram}>
                              {data.weight}
                        </div>
                        <div className={itemFoodsClass.btn}>
                              
                        </div>
                  </div>
            </div>
      )
}
export default ItemFoods