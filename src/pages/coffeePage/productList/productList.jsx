import './productList.scss';
import { Component } from 'react';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    console = () => {
        console.log("+");
    }

    render() {
        let { filteredData, getId } = this.props;
        let standart = filteredData.filter((item) => {
            return item.best === false;
        });
        let list = standart.map((item, i) => {
            return(
                <li className="item" key={i} onClick={() => getId(item.id)}>
                    <img className='itemThumbnail group' src={item.thumbnail} alt={item.title} />
                    <h2 className="itemTitle group">
                        {item.title}
                    </h2>
                    <div className="country group">
                        {item.country}
                    </div>
                    <div className="itemPrise group">
                        {`${item.prise}$`}
                    </div>
                </li>
            );
        })
        return (
            <section className='productListWrapper container800px'>
                <ul className="listItem">
                    {list}
                </ul>
            </section>
        );
    }

}

export default ProductList;