import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
     <Link href={"/"}>
      <Image src={"/next.svg"} width={150} alt='my logo image' height={40} />
     </Link>
     
      </div>
      <Nav />
    </header>
  )
}

export default Header
