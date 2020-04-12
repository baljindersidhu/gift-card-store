export default class SidenavAction{
    
    icon;
    active;


    constructor(icon, active){
        this.icon = icon;
        this.active = active;
    }

    setActive(active){
        this.active = active;
    }

}