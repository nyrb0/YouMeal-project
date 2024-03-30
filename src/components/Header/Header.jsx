import HeaderItem from '../haeder-item/HeaderItem';
import ListFoods from '../list-foods/ListFoods';
import NameFast from '../name-fast/NameFast';
import headerClass from './Header.module.scss'
import { useEffect, useState } from 'react';
const Header = ()=>{

      const [dataListF,setDataListF] = useState([])

      useEffect(()=>{
            const dataFoodsList = async()=>{
                  try{
                        const responseFromServerList = await fetch('http://localhost:3001/listGoods')
                        if(!responseFromServerList.ok){
                              throw new Error('Ошибка данных')
                        }
                        const dataList = await responseFromServerList.json()
                        setDataListF(dataList)
                  }catch(err){
                        console.error('Ошибка:', err)
                  }
            
            }
            dataFoodsList()
      },[])

      return(
            <header>
                  <div className={headerClass.header}>
                        <div className={headerClass.wrapper}>
                              <div className={headerClass.content}>
                                    <NameFast/>
                                    <HeaderItem/>
                              </div>
                             
                        </div>
                  </div>
                  <div className={headerClass.list}>
                        <ListFoods list={dataListF}/> 
                  </div>
                  
            </header>
      )
}
export default Header;