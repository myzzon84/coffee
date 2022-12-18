import './ourBest.scss';
import paper from '../../../resourses/paper.jpg';

const OurBest = ({data, toPage, getId}) => {
    let best = data.filter((item) => {
        return item.best === true;
    })
    const listCard = best.map((item, i) => {
        return (
            <li className="item" key={i} onClick={() => {toPage('itemPage'); getId(item.id)}}>
                <a href="#!" className="card">
                    <div className="imgWrapper">
                        <img className='cardImg' src={item.thumbnail} alt={`card${i + 1}`} />
                    </div>
                    <div className="title">
                        {item.title}
                    </div>
                    <div className="prise">
                        {`${item.prise}$`}
                    </div>
                </a>
            </li>

        );
    });
    return (
        <section className='ourBestWrapper'>
            <img className='paper' src={paper} alt="paper" />
            <h2 className="h2">
                Our Best
            </h2>
            <div className="bodyCard">
                <ul className="listCard">
                    {listCard}
                </ul>
            </div>
        </section>
    );
}

export default OurBest;