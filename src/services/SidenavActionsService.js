import SidenavAction from "../models/SidenavAction";

class SidenavActionsService{
    actions;

    constructor(){
        this.setActions();
    }

    setActions(){
        let labels = ["Cards", "Sale", "Groups", "Settings"];
        let icons = ["bank-card-2", "service", "group", "settings-2"];
        icons = icons.map(icon => `ri-${icon}-fill`);
        this.actions = labels.map((label, index) => new SidenavAction(icons[index], false));
        this.actions[0].setActive(true);
    }

}

export default new SidenavActionsService();