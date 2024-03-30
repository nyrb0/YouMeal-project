import nameFastClass from './NameFast.module.scss'
import forksIcon from '/public/forks.png'
const NameFast = ()=>{

      
      return(
            <div className={nameFastClass.name}>
                  <div className={nameFastClass.nameFast}>
                        <div className={nameFastClass.titleFast}>
                              YourMeal
                        </div>
                        <div className={nameFastClass.icon}>
                              <img src={forksIcon} alt="icon" />  
                        </div>
                  </div>
            </div>
      )
}
export default NameFast;