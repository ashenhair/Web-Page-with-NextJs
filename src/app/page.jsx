import Image from 'next/image'
import styles from './page.module.css'
import Car from "public/car.png";
import Button from './components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Classics are a way of life</h1>
        <p className={styles.desc}>Add value to your life with your choices.
          We are waiting for you at our showrooms for more.
        </p>
        <Button url="/portfolio" text="Showrooms"/>
        
      </div>
      <div className={styles.item}>
      <Image src={Car} width={500} height={500} alt="" className={styles.img}/>
      </div>
    </div>
  )
}