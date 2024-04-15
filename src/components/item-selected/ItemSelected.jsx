import DescAbout from '../desc-about-food/DescAbout'
import itemClass from './ItemSelected.module.scss'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Amount from '../amount/Amount';

const ItemSelected = ({selected})=>{
      const [openIsTheSelectedClick,setIsOpenTheSelectedClick]=useState(false)
      const funcOpen = ()=>{
            setIsOpenTheSelectedClick(open=>!open)
      }

      return(
            <div className={itemClass.content}>
            <div className={itemClass.line}>
            </div>                  
            <div className={itemClass.contentTwo}>
                  <div className={itemClass.info} >
                        <div className={itemClass.thePhoto}>
                              <img src={selected.url} alt="image"onClick={funcOpen} />
                        </div>
                        <div className={itemClass.description}>
                              <div className={itemClass.title}>
                                    {selected.title}
                              </div>
                              <div className={itemClass.weight}>
                                    { selected.weight || selected.weight.length ? `${selected.weight}г` : 'Неизвестно'}
                              </div>
                              <div className={itemClass.price}>
                                    {selected.price}сом
                              </div>
                        </div>
                  </div>
                  <Amount/>
            </div>
            {openIsTheSelectedClick ? (<Modal isOpen={funcOpen} infoData={selected}>
                                    <DescAbout isOpen={funcOpen} desc={selected}/>
                                    </Modal>):null}
      </div>
      )
}
export default ItemSelected