import Link from 'next/link';
import createMemoryArray from '../util/createMemoryArray';
import beginStyles from '../styles/begin.module.css';

export default function begin() {
  return (
    <div>
        <Link href='/game'><button className={beginStyles.button}>BEGIN</button></Link>       
    </div>
  )
}