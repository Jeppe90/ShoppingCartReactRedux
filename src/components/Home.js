import React, { Component } from 'react';
import { connect } from 'react-redux'
import SingleChoice from './SingleChoice'
import ProductList from './product-listing/ProductList'
import { fetchContacts } from '../actions/';
import SearchBar from './SearchBar'
import Footer from './Footer'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            sortByPrice: '',
            size: '',
            query: "",
            products: [],
            filterProducts: [],
        };
    }
    componentDidMount() {
        this.setState({
            products: this.props.items
        })
        this.listProducts();
    }

    listProducts = () => {
        this.setState(state => {
            if (state.sortByPrice !== '') {
                state.products.sort((a, b) =>
                    (state.sortByPrice === 'lowestprice'
                        ? ((a.price > b.price) ? 1 : -1)
                        : ((a.price < b.price) ? 1 : -1)));
            }
            else {
                state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
            }
            if (state.size !== '') {
                return {
                    filterProducts: state.products.filter(product =>
                        product.size.indexOf(state.size.toUpperCase()) >= 0)
                }
            }
            if (state.query !== '') {
                return {
                    filterProducts: state.products.filter(product =>
                        product.title.toLowerCase().includes(state.query.toLowerCase()))
                }
            }
            return { filterProducts: state.products };
        })
    }
    handleChangeSort = (e) => {
        this.setState({ sortByPrice: e.target.value });
        this.listProducts();
    }
    handleInputChange = (e) => {
        this.setState({ query: e.target.value })
        this.listProducts();
    }
    handleChangeSize = (e) => {
        this.setState({ size: e.target.value });
        this.listProducts();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <SearchBar
                            query={this.state.query}
                            handleInputChange={this.handleInputChange} />
                    </div>
                    <div>
                        <SingleChoice
                            sort={this.state.sortByPrice}
                            size={this.state.size}
                            handleChangeSort={this.handleChangeSort}
                            handleChangeSize={this.handleChangeSize} />
                        <ProductList itemList={this.state.filterProducts} />
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}
export default connect(mapStateToProps, { fetchContacts })(Home)