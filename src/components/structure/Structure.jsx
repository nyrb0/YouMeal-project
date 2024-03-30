import { useEffect, useState } from 'react';
import ItemFoods from '../item-foods/ItemFoods';
import structureClass from './Structure.module.scss'

const Structure = ()=>{

      const [dataProgress,setDataProgress]=useState([])

      useEffect(()=>{
            const data = async()=>{
                  try{
                        const responseFromServerSt = await fetch('http://localhost:3001/burgersData');
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
                  {dataProgress.map(data=><ItemFoods  data={data} key={data.id}/>)}
            </div>
      )
}

export default Structure;