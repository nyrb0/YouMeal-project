import classNames from 'classnames'
import buttonClass from './Button.module.scss'

const Button = ({
      children,
      size,
      type,
      onClick
})=>{


      const dataClass = classNames({
            "first":true,
            "active": type === "active",
      })

      return(
            <button className={buttonClass.btn} onClick={onClick}>
                  {children}
            </button>
      )
}
export default Button