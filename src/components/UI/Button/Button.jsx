import buttonClass from './Button.module.scss'

const Button = ({children,size})=>{

      return(
            <button className={buttonClass.btn}>
                  {children}
            </button>
      )
}
export default Button