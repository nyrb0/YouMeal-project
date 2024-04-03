import NameFast from '../name-fast/NameFast'
import footerClass from './Footer.module.scss'


const Footer = ()=>{
      
      return(
            <div className={footerClass.footerClass}>
                  <div className={footerClass.bg}>
                        <div className={footerClass.contact}>
                              <div className={footerClass.title}>
                                    <img src="/icons/YourMeal.png" alt="YourMeal" />
                              </div>
                              <div className={footerClass.callAndKnowAbout}>
                                    <div className={footerClass.number}>
                                          <div className={footerClass.direction}>
                                                Номер для заказа
                                          </div>
                                          <div className={footerClass.num}>
                                          <span><img src="./icons/Call.png" alt="phone" /></span>+996(700)269301
                                          </div>
                                    </div>
                                    <div className={footerClass.social}>
                                          <div className={footerClass.direction}>
                                                Мы в соцсетях
                                          </div>
                                          <div className={footerClass.linkToSocialIcon}>
                                                <img style={{paddingRight:'16px'}} src="/icons/wk.png" alt="" />
                                                <img src="/icons/tg.png" alt="" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className={footerClass.year}>
                              © YouMeal, 2022 <br />
                              Design: Anastasia Ilina
                        </div>
                  </div>
            </div>
      )
}
export default Footer