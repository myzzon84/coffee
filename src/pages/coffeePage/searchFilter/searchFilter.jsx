import './searchFilter.scss';
import { Component } from 'react';

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnActive: 1,
            country: 'All',
            search: ''
        }
    }

    btnActive = (e) => {
        this.setState({
            btnActive: Number(e.target.getAttribute('data-num')),
            country: e.target.textContent
        });
        this.props.onSearchFilter(e.target.textContent, this.state.search);
    }

    search = (e) => {
        this.setState({
            search: e.target.value
        });
        this.props.onSearchFilter(this.state.country, e.target.value);
    }

    btnStyle = 'btn';
    btnActiveStyle = 'btn btnActive';
    countries = ['All','Brazil', 'Kenya', 'Columbia'];

    render() {
        const buttons = this.countries.map((item, i) => {
            let btnActive = i + 1 === this.state.btnActive ? `btn btnActive ${item}` : `btn ${item}`;
            return (
                <button className={btnActive} data-num={i + 1} onClick={this.btnActive} key={i}>
                    {item}
                </button>
            );
        });

        return (
            <section className='searchFilterWrapper container800px'>
                <div className="search">
                    <span className='lookiingFor'>
                        Lookiing for
                    </span>
                    <input 
                        className='input' 
                        type="text" 
                        placeholder='start typing here...'
                        value={this.state.search}
                        onChange={this.search} />
                </div>
                <div className="filter">
                    <span className='filter'>
                        Or filter
                    </span>
                    {buttons}
                </div>
            </section>
        );
    }

}

export default SearchFilter;