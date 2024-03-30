import { Link } from 'react-router-dom';
import lFoodsClass from './ListFoods.module.scss'

const ListFoods = ({list})=>{

      return(
            <div className={lFoodsClass.list}>
                  <nav className={lFoodsClass.navigation}>
                        {list.map(listFoods=>(
                              <Link to="/hamburger" key={listFoods.id}>
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
                              </Link>
                        ))}
                  </nav>
            </div>
      )
}
export default ListFoods;