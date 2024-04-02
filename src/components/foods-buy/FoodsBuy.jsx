import { useDispatch, useSelector } from 'react-redux';
import foodsBuyClass from './FoodsBuy.module.scss'
import { addToCart } from '../../purchased';
import Button from '../UI/Button/Button';

const FoodsBuy = ({data})=>{
      const dispatch = useDispatch();
      const handle = ()=>{
            dispatch(addToCart(data))
      }
      return(
            <div className={foodsBuyClass.buyThis}>
                  <Button onClick={handle}>Добавить</Button>
            </div>      
      )
}

export default FoodsBuy;