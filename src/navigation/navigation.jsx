import '../style/fonts.scss';
import logoWhite from '../resourses/logoWhite.svg';
import logoBlack from '../resourses/logoBlack.svg';

const Navigation = ({logo,toPage}) => {
    let logoColor;
    if(logo === 'white'){
        logoColor = logoWhite;
    }
    if(logo === 'black'){
        logoColor = logoBlack;
    }
    return (
        <nav className="nav">
            <ul className="navMenu">
                <li className="navItem">
                    <img className='logo' src={logoColor} alt="logo"/>
                    <a href="#!" className="navLink" onClick={() => toPage('homePage')}>
                        Coffee house
                    </a>
                </li>
                <li className="navItem">
                    <a href="#!" className="navLink" onClick={() => toPage('coffeePage')}>
                        Our coffee
                    </a>
                </li> 
                <li className="navItem">
                    <a href="#!" className="navLink" onClick={() => toPage('pleasure')}>
                        For your pleasure
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;