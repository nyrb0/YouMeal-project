import { useEffect, useState } from 'react';
import ItemFoods from '../item-foods/ItemFoods';
import structureClass from './Structure.module.scss'

const Structure = ({urlToData,setInnerOpen})=>{
      const [open,setOpen]=useState(null)
      const [dataProgress,setDataProgress]=useState([])
      const giveToUseState = (state)=>{
            setOpen(state)
      }
      useEffect(()=>{
            const data = async()=>{
                  try{
                        const responseFromServerSt = await fetch(urlToData);
                        if(!responseFromServerSt.ok){
                              throw new Error('Ошибка данных')
                        }
                        const toJsonFormat = await responseFromServerSt.json();
                        setDataProgress(toJsonFormat);
                        
                  }catch(err){
                        console.error('Ошибка:',err)
                  }
            };
            data();
      },[])
      
      return(
            <div className={structureClass.structures}>
                  <div className={structureClass.contents}> 
                        <div className={structureClass.innerContent}>
                              {dataProgress.map(data=><ItemFoods  data={data} key={data.id} setInnerOpen={giveToUseState}/>)}
                        </div>
                  </div>
            </div>
      )
}

export default Structure;