import headerStyles from '../styles/header.module.css';

const Header = () => {
    return(
        <div>
            <h1 classname={headerStyles.title}>
            The Memory Game
            </h1>
        </div>
    )
}

export default Header