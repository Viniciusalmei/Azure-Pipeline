import {Part} from './Parts';

export const calcTotalCost = (item:ItemCart):number =>{
    return item.base.cost + item.head.cost +  
    item.rightArm.cost + item.leftArm.cost + item.torso.cost;

};


export class ItemCart {
    head: Part = new Part();
    leftArm: Part = new Part(); 
    rightArm: Part = new Part();
    torso: Part = new Part();
    base: Part = new Part();
    cost: number = 0.0;
    construtor (){
       this.updateCost();
    }

    updateCost(){
        this.cost = calcTotalCost(this);    }
}


export class Cart {
    robots: Array<ItemCart> = [];
    

}
