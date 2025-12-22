import styles from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faLocationDot,
   faCirclePlus,
   faBars,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
   return (
      <>
         <ul className={styles.list}>
            <li>
               <FontAwesomeIcon icon={faLocationDot} />
            </li>
            <li>
               <FontAwesomeIcon icon={faCirclePlus} />
            </li>
            <li>
               <FontAwesomeIcon icon={faBars} />
            </li>
         </ul>
      </>
   );
};

export default Footer;
