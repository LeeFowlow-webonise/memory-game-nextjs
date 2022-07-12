import Nav from './Nav';
import Header from './Header';
import layoutStyles from '../styles/layout.module.css';

const Layout = ({ children }) =>  {
  return (
    <>
        <Nav />
        <div className={layoutStyles.container}>
            <main className={layoutStyles.main}>
                <Header />
                {children}
            </main>        
        </div>
    </>
  )
}

export default Layout