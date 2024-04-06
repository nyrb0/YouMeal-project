import { useState } from "react";
import modalClass from './Modal.module.scss'
import DescAbout from "../desc-about-food/DescAbout";

const ModalGoods = ({isOpen,infoData,children})=>{
      
      return(
            <div className={modalClass.wrapper}> 
                  <div className={modalClass.content}>
                        <div className={modalClass.modal}> 
                              {children}
                        </div>
                  </div>
            </div>
      )
}

export default ModalGoods;