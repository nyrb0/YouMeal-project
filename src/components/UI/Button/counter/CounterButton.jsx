import counterClass from './CounterButton.module.scss'

const CounterButton = ({
      children,
      onClick
})=>{

      return(
            <button onClick={onClick} className={counterClass.counter}>
                  {children}
            </button>  
      )
}
export default CounterButton