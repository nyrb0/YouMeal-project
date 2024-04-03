import totalClass from './TotalAmount.module.scss'
import { useSelector } from 'react-redux'
const TotalAmount = ({totalPrice=[]})=>{
      console.log(totalPrice)
      const count = totalPrice.reduce((acc,item)=> acc+item.price,0)
      return(
            <div className={totalClass.total}>
                  <span>
                        Итого
                  </span>
                  {count}сом
            </div>
      )
}
export default TotalAmount;