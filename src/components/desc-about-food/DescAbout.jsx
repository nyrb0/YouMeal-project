import Button from '../UI/Button/Button';
import Exit from '../UI/Button/exit/Exit';
import descAboutClass from './DescAbout.module.scss'
import CounterButton from '../UI/Button/counter/CounterButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, delateToCart } from '../../purchased';
import { useState } from 'react';
import FoodsBuy from '../foods-buy/FoodsBuy';
const DescAbout = ({isOpen,desc})=>{
      console.log(desc);
      const dispatch = useDispatch()
      const [active,setActive]=useState(false)
      const inSelected = useSelector(state=>state.foodsCart.cartStateNow)
      const addToSelected = () => {
            setActive(active=>!active)
            if (active) { 
                  dispatch(addToCart(desc)); 
            }
            else{
                  dispatch(delateToCart(desc))
            }
      }
      return(
            <div className={descAboutClass.desc}>
                  <div className={descAboutClass.exit}>
                        <Exit onClick={isOpen}/>
                  </div>
                  <div className={descAboutClass.title}>
                        Мясная бомба
                  </div>
                  <div className={descAboutClass.fullDesc}>
                        <div className={descAboutClass.leftPlace} >
                              <div className={descAboutClass.img}>
                                    <img src={desc.url} alt="photo"/>
                              </div> 
                              <div className={descAboutClass.btn}>
                                    <FoodsBuy data={desc}/>
                              </div>
                        </div>
                        <div className={descAboutClass.fullDescText}>
                                    <div className={descAboutClass.description}>
                                          {desc.description ? desc.description:"Описание отсутсвует"}
                                    </div>
                              <div className={descAboutClass.recipe}>
                                    Состав:
                                    <div className={descAboutClass.recipeList}>
                                    {desc.recipe && Array.isArray(desc.recipe) ? 
                                          desc.recipe.reduce((acc, recipes) =>
                                          acc.concat(<div key={recipes}>{recipes}</div>)
                                    , [])
                                          :
                                    (<div>Состав неизвестно</div>)}
                                    </div>
                                    <div className={descAboutClass.weight}>
                                          {desc.weight}г,
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default DescAbout;