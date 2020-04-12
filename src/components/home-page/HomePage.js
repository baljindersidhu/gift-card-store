import React from 'react';
import './HomePage.css';

import Sidenav from '../sidenav/Sidenav';
import GiftCardService from '../../services/GiftCardService';
import SidenavActionsService from '../../services/SidenavActionsService';

export default function HomePage(){
    return (
        <React.Fragment>
            <Sidenav />
            <div className="HomePage">
                <PageHeader heading="Gift cards" />
                <GiftCardGallery />
                <div className="row">
                    <SidenavActions />
                    <BestSellerCard card={GiftCardService.getNetflixCard()} />
                </div>
            </div>
        </React.Fragment>
    )
}

class PageHeader extends React.Component{
    
    render(){
        return(
            <div className="PageHeader row centerV">
                <div className="heading">{this.props.heading}</div>
                <div className="fillParent"></div>
                <i className="ri-home-smile-fill"></i>
            </div>
        );
    }

}




/**
 * This  Component is used to render the Gift Cards Gallery
 * on Home Page of the app
 */

function GiftCardGallery(){

    function getCard(bgIcon, avatarIcon, label, price){
        return (
            <div className="Card column centerH positionRelatve" key={performance.now()}>
                {/* <div className="positionAbsolute">
                    <img src="logos/apple.svg" alt="brand-icon" aria-label="brand icon of gift card"/>
                </div> */}
                <i className={avatarIcon}></i>
                <div className="label positionRelative">{label}</div>
                <div className="price positionRelative">{price}</div>
            </div>
        );
    }

    function getGiftCards(){
        let giftCards = GiftCardService.giftCards;
        return giftCards.map(card => getCard(
            card.avatarIcon, card.headerIcon, 
            card.label, card.getPrice()
        ));
    }

    return(
        <div className="CardGallery">
            <div className="row centerV">
                <div className="heading">Featured Gift cards</div>
                {getGiftCards()}
            </div>
            <div className="navigator row centerV">
                <div className="separator"></div>
                <i className="ri-arrow-left-line"></i>
                <i className="ri-arrow-right-line"></i>
            </div>
        </div>
    );
}








/**
 * This Component is used ot render Sidenav actions on the Home Page
 * of the app
 */

class SidenavActions extends React.Component{
    
    getAction(icon, active){
        return (
            <div className="action positionRelative" data-active={active} key={performance.now()}>
                <i className={icon}></i>
            </div>
        );
    }

    getActions(){
        return SidenavActionsService.actions.map(action => this.getAction(action.icon, action.active));
    }
    
    render(){
        return (
            <div className="SidenavActions">
                {this.getActions()}
            </div>
        );
    }
}










/**
 * This Component is used to render Best Seller 
 * card on the homepage of the app
 */

class BestSellerCard extends React.Component{
    render(){
        let card = this.props.card;
        return(
            <div className="BestSellerCard positionRelative">
                <div className="heading">Best seller</div>
                <div className="Card positionRelative">
                    <div className="headerIcon"><i className={card.headerIcon}></i></div>
                    <div className="label">{card.label}</div>
                    <div className="price positionRelative">{card.getPriceRange()}</div>
                </div>
            </div>
        )
    }
}