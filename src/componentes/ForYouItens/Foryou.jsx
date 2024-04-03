import styles from './Foryou.module.css'
import topbanner from '../../images/undraw_order_a_car_-3-tww.svg'
import { Link } from 'react-router-dom' 

const Foryou = () => {
  return (
    <div className={styles.banner_container}>
        <div className={styles.titulobanner}>
            <h1>Entrega <span>grátis</span></h1>
            <h1>na sua primeira compra!</h1>
            <p>*consulte termos e condições</p>
            <Link to='/produtos'><button>LANCHES</button></Link>
        </div>
        <img src={topbanner} alt="banner-top" />
        

    </div>
  )
}

export default Foryou