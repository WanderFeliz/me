import styles from "./topbar.module.scss";
import { Person, Mail } from '@mui/icons-material';


const Topbar: React.FC<TopbarProps> = ({menuOpen, onToggle}) => {
  return (
    <div className={`${styles.topbar} ${menuOpen && styles.active}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro" className={styles.logo}>
            W.P
          </a>
          <div className={styles.itemContainer}>
            <Person className={styles.icon}/>
            <span>+1 849-867-4590</span>
          </div>
          <div className={styles.itemContainer}>
            <Mail className={styles.icon}/>
            <span>wanderxavier1998@hotmail.com</span>
          </div>
        </div>
        <div className={styles.right}>
          
          <div className={styles.hamburger} onClick={onToggle}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

type TopbarProps = {
  menuOpen: boolean;
  onToggle: () => void;
};

export default Topbar;
