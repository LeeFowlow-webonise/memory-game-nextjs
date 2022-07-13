import Link from 'next/link';
import beginStyles from '../styles/begin.module.css';

export default function begin() {
  return (
    <div>
        <Link href='/game'><button className={beginStyles.button}>BEGIN</button></Link>       
    </div>
  )
}