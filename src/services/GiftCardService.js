import GiftCard from '../models/GiftCard';

class GiftCardService{
    
    giftCards;
    
    constructor(){
        this.setCards();
    }

    setCards(){
        let giftCardsLabels = ["iTunes", "Netflix", "Amazon", "Amazon"];
        let giftCardsIcons = ["apple", "netflix", "amazon", "amazon"];
        let giftCardsBgIcons = giftCardsIcons.map(icon => `/logos/${icon}.svg`);
        giftCardsIcons = giftCardsIcons.map(icon => `ri-${icon}-fill`);

        let giftCardsPrices = [100, 100, 200, 100];
        let giftCards = new Array(3).fill(1);
        giftCards = giftCards.map((card, index) => index);
        this.giftCards = giftCards.map(card => new GiftCard(
            giftCardsBgIcons[card], giftCardsIcons[card], 
            giftCardsLabels[card], giftCardsPrices[card],
            10, giftCardsPrices[card]
        ));
    }

    getAppleCard(){
        return new GiftCard(
            "/logos/apple.svg", "ri-apple-fill",
            "iTunes", "100", "10", "100"
        );
    }

    getNetflixCard(){
        return new GiftCard(
            "/logos/netflix.svg", "ri-netflix-fill",
            "Netflix", "200", "10", "200"
        );
    }

    getAmazonCard(){
        return new GiftCard(
            "/logos/amazon.svg", "ri-amazon-fill",
            "Amazon", "100", "10", "100"
        );
    }

    getPrimeNowCard(){
        return new GiftCard(
            "/logos/amazon.svg", "ri-amazon-fill",
            "Amazon", "100", "10", "100"
        );
    }

    getCard(cardName){
        if(cardName === 'iTunes'){
            return this.getAppleCard()
        }else if(cardName === 'Netflix'){
            return this.getNetflixCard()
        }else if(cardName === 'Amazon'){
            return this.getAmazonCard()
        }else if(cardName === 'Prime'){
            return this.getPrimeNowCard()
        }
    }

}

export default new GiftCardService();