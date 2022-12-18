import './heroCoffeePage.scss';
import heroImage from './res/coffeeShop.jpg';

const HeroCoffeePage = ({mainImg, page, titlePage}) => {
    const image = page === 'pleasure' ? mainImg : heroImage;
    const title = page === 'pleasure' ? titlePage : 'Our Coffee';
    return(
        <section className='heroWrapper1'>
            <img src={image} alt="mainIMG" className="heroImage" />
            <h1 className="h111">
                {title}
            </h1>
        </section>
    );
}

export default HeroCoffeePage;