import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
     
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h3>&lt;About /&gt;</h3>
          <hr className={styles.line} />
          <p><Link to="/about" style={{ textDecoration: 'none', color: 'white', fontStyle: 'italic' }}>Know me</Link></p>
        </div>
        <div className={styles.footerColumn}>
          <h3>&lt;Contact /&gt;</h3>
          <hr className={styles.line} />
          <p>Email: <a href="mailto:puntonetazul@gmail.com" style={{ textDecoration: 'none', color: 'white', fontStyle: 'italic' }}>puntonetazul@gmail.com</a></p>

          <p>Phone: <a href="https://wa.me/+542281531457" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', fontStyle: 'italic' }}>+54 (02281) 15531457</a></p>

        </div>
        <div className={styles.footerColumn}>
          <h3>&lt;Social Media /&gt;</h3>
          <hr className={styles.line} />
          <p>Linkdin</p>
          <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
