      import { Link } from 'react-router-dom';
      import lFoodsClass from './ListFoods.module.scss'
      import Slider from 'react-slick'; 
      import { useState } from 'react';
      const ListFoods = ({list})=>{
            const [theListMenu,setTheListMenu]= useState({})
            const selectedToMenu =(index)=>{
                  setTheListMenu((menu)=>({
                        [index]:!menu[index],
                  }))
            }
            console.log(theListMenu)
            return(
                  <div className={lFoodsClass.list}>
                        <nav className={lFoodsClass.navigation}>
                              {list.map((listFoods,index)=>(
                                    <div key={listFoods.id}>
                                          {listFoods.toLink ?(
                                          <Link to={listFoods.toLink}>
                                                <ul>
                                                      <li className={lFoodsClass.menuList}
                                                      style={{background:theListMenu[index] ?'#FFAB08':"#FFFFFF"}}
                                                      onClick={()=>selectedToMenu(index)}>
                                                            <div className={lFoodsClass.titleList}>
                                                                  {listFoods.title}
                                                            </div>
                                                            <div className={lFoodsClass.icon}>
                                                                  <img src={listFoods.url} alt="listMenu" />
                                                            </div>
                                                      </li>
                                                </ul>
                                          </Link>): null
                                          }
                                    </div>
                              ))}
                        </nav>
                  </div>
            )
      }
      export default ListFoods;