import exitClass from './Exit.module.scss'

const Exit = ({onClick})=>{

      return  <button onClick={onClick}><img src="/icons/close.png" alt="close" /></button>
      
}
export default Exit