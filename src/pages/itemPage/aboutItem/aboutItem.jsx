import './aboutItem.scss';
import coffeeBlack from '../../../resourses/coffee_black.svg';

const AboutItem = ({data, dataId}) => {
    return (
        <section className="aboutItemWrapper">
            <div className="image">
                <img
                    src={data[dataId].thumbnail}
                    alt="Product"
                    className="productImage" />
            </div>
            <div className="content">
                <h2 className="title">
                    {data[dataId].title}
                </h2>
                <div className="imgContainer">
                    <img src={coffeeBlack} alt="coffee black" className="coffeeBlack" />
                </div>
                <div className="countryInfo">
                    <span className='wordCountry'>
                        Country:<code> </code>
                    </span>
                    <span className='countryName'>
                        {data[dataId].country}
                    </span>
                </div>
                <p className='description'>
                    <span className='bold'>
                        Description:
                    </span><code> </code>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="priceInfo">
                    <span className='wordPrice'>
                        Price:
                    </span><code>  </code>
                    <span className="value">
                        {data[dataId].prise}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default AboutItem;