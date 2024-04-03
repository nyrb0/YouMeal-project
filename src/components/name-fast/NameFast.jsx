import nameFastClass from './NameFast.module.scss'
import forksIcon from '/public/forks.png'
const NameFast = ({size,color})=>{

      const styleText = {
            fontSize:size,
            color:color,
      }
      return(
            <div className={nameFastClass.name}>
                  <div className={nameFastClass.nameFast}>
                        <div className={nameFastClass.titleFast} style={styleText}>
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