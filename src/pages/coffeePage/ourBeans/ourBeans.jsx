import './ourBeans.scss';
import girl from './res/girl.jpg';
import coffeeBlack from '../../../resourses/coffee_black.svg';

const OurBeans = ({cupCoffee, page, aboutOurGoods}) => {

    const image = page === 'pleasure' ? cupCoffee : girl;
    const about = page === 'pleasure' ? aboutOurGoods : 'About our beans';

    return (
        <section className="ourBeansWrapper">
            <div className="body container800px">
                <div className="image half">
                    <img className='girlIMG' src={image} alt="girl" />
                </div>
                <div className="description half">
                    <div className="title">
                        <h2 className="h2">
                            {about}
                        </h2>
                        <img className='coffeeBlack' src={coffeeBlack} alt="coffeeBlack" />
                    </div>
                    <p className="text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />Afraid at highly months do things on at. Situation recommend objection do intention<br />so questions.<br />As greatly removed calling pleased improve an. Last ask him cold feel<br />met spot shy want. Children me laughing we prospect answered followed. At it went<br />is song that held help face.
                    </p>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default OurBeans;