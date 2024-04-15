import checkClass from './Checkbox.module.scss'

const Checkbox = ({value,checked,onChange})=>{
      return (
                  <label className={checkClass.check}>
                        <input 
                        type="radio"
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        />
                  </label>
      )
}
export default Checkbox