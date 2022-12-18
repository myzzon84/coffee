import './app.scss';
import '../style/style.scss';

import { Component } from 'react';

import pleasureMainIMG from './res/pleasureMainIMG.jpg';
import pleasureCupCoffee from './res/pleasureCupCoffee.jpg';
import thumbnail from '../pages/coffeePage/productList/res/thumbnail.jpg';
import aromistico from '../resourses/AROMISTICO_coffee.jpg';
import presto from '../resourses/presto_coffee.jpg';
import solimo from '../resourses/solimo_coffee.jpg';

import Header from '../pages/homePage/header/header';
import Hero from '../pages/homePage/hero/hero';
import AboutUs from '../pages/homePage/aboutUs/aboutUs';
import OurBest from '../pages/homePage/ourBest/ourBest';
import Footer from '../pages/homePage/footer/footer';
import HeroCoffeePage from '../pages/coffeePage/hero/heroCoffeePage';
import OurBeans from '../pages/coffeePage/ourBeans/ourBeans';
import SearchFilter from '../pages/coffeePage/searchFilter/searchFilter';
import ProductList from '../pages/coffeePage/productList/productList';
import AboutItem from '../pages/itemPage/aboutItem/aboutItem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'homePage',
            country: 'All',
            search: ''
        }
    }

    data = [
        {
            thumbnail: thumbnail,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            best: false,
            prise: '7.99',
            id: 0
        },
        {
            thumbnail: thumbnail,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            best: false,
            prise: '6.99',
            id: 1
        },
        {
            thumbnail: thumbnail,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Columbia',
            best: false,
            prise: '8.99',
            id: 2
        },
        {
            thumbnail: thumbnail,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            best: false,
            prise: '5.99',
            id: 3
        },
        {
            thumbnail: thumbnail,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            best: false,
            prise: '4.99',
            id: 4
        },
        {
            thumbnail: thumbnail,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            best: false,
            prise: '9.99',
            id: 5
        },
        {
            thumbnail: solimo,
            title: 'Solimo Coffee Beans 2 kg',
            country: 'Kenya',
            best: true,
            prise: '10.73',
            id: 6
        },
        {
            thumbnail: presto,
            title: 'Presto Coffee Beans 1 kg',
            country: 'Columbia',
            best: true,
            prise: '15.99',
            id: 7
        },
        {
            thumbnail: aromistico,
            title: 'AROMISTICO Coffee 1 kg',
            country: 'Columbia',
            best: true,
            prise: '6.99',
            id: 8
        }
    ];

    pleasureH1 = 'For your pleasure';
    aboutOurGoods = 'About our goods';

    getId = (id) => {
        this.dataId = id;
        this.setState({
            page: 'itemPage'
        });
    }

    toPage = (page) => {
        this.setState({
            page: page,
        });
        this.filteredData = this.data;
    }

    filteredData = this.data;
    dataId;

    onSearchFilter = (country, string) => {
        this.setState({
            country: country,
            search: string
        });
        if(country === 'All'){
            this.filteredData = this.data;
        }else{
            this.filteredData = this.data.filter((item) => {
                return item.country === country;
            });
        }
        if(string !== ''){
            let temp = this.filteredData.filter((item) => {
                return item.title.includes(string) || item.prise.includes(string);
            })
            this.filteredData = temp;
        }
    }

    render() {
        let { page } = this.state;
        if (page === 'homePage') {
            return (
                <div className="appWrapper">
                    <Header toPage={(page) => this.toPage(page)} />
                    <Hero />
                    <AboutUs />
                    <OurBest 
                        data={this.data} 
                        toPage={(page) => this.toPage(page)} 
                        getId={(id) => this.getId(id)}/>
                    <Footer toPage={(page) => this.toPage(page)} />
                </div>
            );
        }
        if (page === 'coffeePage') {
            return (
                <div className="appWrapper">
                    <Header toPage={(page) => this.toPage(page)} />
                    <HeroCoffeePage />
                    <OurBeans />
                    <SearchFilter onSearchFilter={(country, string) => this.onSearchFilter(country, string)} />
                    <ProductList 
                        data={this.data} 
                        filteredData={this.filteredData}
                        getId={(id) => this.getId(id)} />
                    <Footer toPage={(page) => this.toPage(page)} />
                </div>
            );
        }
        if (page === 'pleasure') {
            return (
                <div className="appWrapper">
                    <Header toPage={(page) => this.toPage(page)} />
                    <HeroCoffeePage
                        mainImg={pleasureMainIMG}
                        titlePage={this.pleasureH1}
                        page={this.state.page} />
                    <OurBeans
                        cupCoffee={pleasureCupCoffee}
                        aboutOurGoods={this.aboutOurGoods}
                        page={this.state.page} />
                    <ProductList 
                        data={this.data} 
                        filteredData={this.filteredData}
                        getId={(id) => this.getId(id)} />
                    <Footer toPage={(page) => this.toPage(page)} />
                </div>
            );
        }
        if (page === 'itemPage') {
            return (
                <div className="appWrapper">
                    <Header toPage={(page) => this.toPage(page)} />
                    <HeroCoffeePage />
                    <AboutItem 
                        data={this.data}
                        dataId={this.dataId} />
                    <Footer toPage={(page) => this.toPage(page)} />
                </div>
            );
        }
    }
}

export default App;