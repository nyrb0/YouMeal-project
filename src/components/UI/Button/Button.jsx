import classNames from 'classnames'
import'./Button.scss'

const Button = ({
      first,
      children,
      size,
      type,
      onClick
})=>{
      const dataClass = classNames({
            'btn':true,
            "first":first === 'first',
            "order":first === 'order',
            "active": type === "active",
            "type-btn": first === 'type-btn',
            
      })

      return(
            <button className={dataClass} onClick={onClick}>
                  {children}
            </button>
      )
}
export default Button