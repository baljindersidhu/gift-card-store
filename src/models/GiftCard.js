export default class GiftCard{

    label;
    headerIcon;
    avatarIcon;
    price;
    min;
    max;
    

    constructor(avatarIcon, icon, label, price, min, max){
        this.avatarIcon = avatarIcon;
        this.headerIcon = icon;
        this.label = label;
        this.price = price;
        this.min = min;
        this.max = max;
    }

    getPrice(){
        return `$${this.price}`;
    }

    getPriceRange(){
        return `$${this.min} - $${this.max}`;
    }
}