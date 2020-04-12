import React from 'react';

import './BuyCard.css';

import NavigationService from '../../services/NavigationService';
import GiftCardService from '../../services/GiftCardService';
import {ExpandedGiftCard} from '../home-page/HomePage';

export default class BuyCard extends React.Component{

    state = {loading: true, cardName: null};

    componentDidMount(){
        NavigationService.setRouteInfo(this.props);
        this.setState({cardName: NavigationService.getParam("cardName")});
        this.setState({loading: false});
    }

    goToHomePage(){
        NavigationService.navigateToHomePage();
    }

    render(){
        let loading = this.state.loading;
        if(loading) return('');

        let cardName = this.state.cardName;
        let card = GiftCardService.getCard(cardName);
        return(
            <div className="BuyCard">
                <div className="row centerV header">
                    <i className="ri-close-line" onClick={this.goToHomePage}></i>
                    <div className="fillParent"></div>
                    <div className="heading">Buy gift cards</div>
                </div>
                <ExpandedGiftCard card={card} />
                <Cart card={card} />
            </div>
        )
    }
}







class Cart extends React.Component{

    state = {loading: true, cardsCount: 1, card: null, selectedStore: null};

    componentDidMount(){
        this.setState({card: this.props.card});
        this.setState({loading: false});
    }

    getAmount(){
        let price_of_one_card = this.state.card.price;
        return (this.state.cardsCount * price_of_one_card);
    }

    getCartPrice(){
        let total_amount = this.getAmount();
        return Number(total_amount * 1.045).toFixed(1);
    }

    getStore(store, selectedStore){
        return (
            <div className="store" data-selected={store === selectedStore} key={performance.now()}>
                <img src={store} alt="country_store" aria-label="select country for subscription"/>
            </div>
        );
    }

    render(){
        let loading = this.state.loading;
        // let selectedStore = this.state.selectedStore;
        // let stores = ["us", "uk", "au"];
        // stores = stores.map(store => `flags/${store}.svg`);

        if(loading) return(<div className="Cart">loading cart ...</div>);

        let cardName = this.props.card.label;

        return(
            <div className="Cart">
                <div className="row centerV">
                    <div className="heading">Select options</div>
                    <div className="CartOptions">

                        <div className="heading">Select size</div>
                        <div className="row centerV SelectCardCount">
                            <div className="button"><i className="ri-subtract-line"></i></div>
                            <div className="amount">{'$' + this.getAmount()}</div>
                            <div className="button"><i className="ri-add-line"></i></div>
                        </div>
                        <div className="heading">Select store</div>
                        <div className="row Stores">
                            {/* {stores.map(store => this.getStore(store, selectedStore))} */}
                        </div>
                    </div>
                </div>

                <div className="CartSummary">
                    <div className="row centerV">
                        <div className="CartPrice">
                            <div className="heading">Cart value</div>
                            <div className="amount">{'$' + this.getCartPrice()}</div>
                        </div>
                        <div className="fillParent"></div>
                        <div className="Button" data-card={cardName}>Add to cart</div>
                    </div>
                </div>
            </div>
        );
    }

}