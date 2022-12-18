import './hero.scss';
import '../../../style/style.scss';
import mainImg from '../../../resourses/main_img.jpg';
import coffeeWhite from '../../../resourses/coffee_white.svg';

const Hero = () => {
    return (
        <div className="heroWrapper">
            <img className='mainImg' src={mainImg} alt="main" />
            <h1 className="h1">
                Everything You Love About Coffee
            </h1>
            <img className='coffeeWhite' src={coffeeWhite} alt="coffee white icon" />
            <div className="slogan">
                <div className="first">
                    We makes every day full of energy and taste
                </div>
                <div className="second">
                    Want to try our beans?
                </div>
            </div>
            <div className="moreLinkContainer">
                <a href="test" className="moreLink">
                    More
                </a>
            </div>

        </div>
    );
}

export default Hero;