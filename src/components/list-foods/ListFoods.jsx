      import { Link } from 'react-router-dom';
      import lFoodsClass from './ListFoods.module.scss'
      import Slider from 'react-slick';

      const ListFoods = ({list})=>{
            return(
                  <div className={lFoodsClass.list}>
                        <nav className={lFoodsClass.navigation}>
                              {list.map(listFoods=>(
                                    <div key={listFoods.id}>
                                          {listFoods.toLink ?(
                                          <Link to={listFoods.toLink}>
                                                <ul>
                                                      <li className={lFoodsClass.menuList} >
                                                            <div className={lFoodsClass.titleList}>
                                                                  {listFoods.title}
                                                            </div>
                                                            <div className={lFoodsClass.icon}>
                                                                  <img src={listFoods.url} alt="dcd" />
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