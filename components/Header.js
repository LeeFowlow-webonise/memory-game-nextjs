import headerStyles from '../styles/header.module.css';

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>
            The Memory Game
            </h1>
        </div>
    )
}

export default Header