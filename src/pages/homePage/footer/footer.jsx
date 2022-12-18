import './footer.scss';
import '../../../style/navigation.scss';
import Navigation from '../../../navigation/navigation';
import coffeeBlack from '../../../resourses/coffee_black.svg';

const Footer = ({toPage, page}) => {
    return(
        <footer className="footerWrapper">
            <Navigation 
                logo='black'
                toPage={toPage} 
                page={page}/>
            <img className='coffeeBlack' src={coffeeBlack} alt="coffee black icon" />
        </footer>
    );
}

export default Footer;