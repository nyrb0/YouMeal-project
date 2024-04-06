import intClass from './Input.module.scss'

const Input = ({
      placeholder,
      type,

})=>{
      return(
            <input placeholder={placeholder} className={intClass.int}>
                  
            </input>
      )
}

export default Input