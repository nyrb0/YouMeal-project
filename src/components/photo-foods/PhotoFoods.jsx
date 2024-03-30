import photoClass from './PhotoFoods.module.scss'


const PhotoFoods =({img})=>{

      return(
            <div className={photoClass.cover} style={{background:`url(${img})`,backgroundSize:'cover'}}>
                  
            </div>
      )
}
export default PhotoFoods;