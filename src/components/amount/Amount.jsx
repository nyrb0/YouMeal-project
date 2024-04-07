import amountClass from './Amount.module.scss'
import CounterButton from '../UI/Button/counter/CounterButton';
import { useState } from 'react';
const Amount = ()=>{
      const [count,setCount]= useState(0)

      const up =()=>{
            setCount(count=>count+1)
      }
      const down = ()=>{
            if(count>0){
                  setCount(count=>count-1)
            }
      }
      return(
            <div className={amountClass.amount}>
                  <div className={amountClass.counter}>
                        <CounterButton onClick={down}>-</CounterButton>
                              <div className={amountClass.quantity}>
                                    {count}
                              </div>
                        <CounterButton onClick={up}>+</CounterButton>
                  </div>
            </div>
      )
}
export default Amount;