class NavigationService{
    history;
    match;

    setRouteInfo(props){
        this.setHistory(props.history);
        this.setMatch(props.match);
    }
    
    setHistory(history){
        this.history = history;
    }

    setMatch(match){
        this.match = match;
    }

    hasParam(paramKey){
        return (this.match !== void 0 && paramKey in this.match.params);
    }

    getParam(paramKey){
        if(this.hasParam(paramKey)){
            return this.match.params[paramKey];
        }
    }

    navigateTo(path){
        if("history" in this){
            this.history.push(path);
        }else{
            window.location.href = path;
        }
    }

    navigateToHomePage(){
        this.navigateTo("/");
    }

    navigateToBuyCard(cardName){
        let path = `/buy/card/${cardName}`;
        this.navigateTo(path);
    }
}

export default new NavigationService();