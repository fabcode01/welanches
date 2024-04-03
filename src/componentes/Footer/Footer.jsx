import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer_container}>
            <p>© Copyright 2022 - Todos os direitos reservados de WeLanches. empresa com sede social na xxxxxxxx xxxxxxxx xxxxxxxxxxx xxxx, devidamente inscrita no CNPJ/MF sob nº xxxxxxxxxxxxxxxx.</p>
        
                <ul>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                </ul>
        
            <p>© 2024 WeLanches. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer