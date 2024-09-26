import {defineStore} from 'pinia';
import {Cart,ItemCart}  from '@/models/Cart';

export const useCart = defineStore("robot-cart",{
    state: (): Cart => ({
     
        robots: []

    }),
    persist: true,
    actions: {
        

        addCart(robot:ItemCart){
           const  deepCopy = 
           JSON.parse(JSON.stringify(robot)) as ItemCart;
           this.robots.push(deepCopy);

        
        },


        removeCart(index:   number){
            if( index <=(this.robots.length -1))
                this.robots.splice(index,1); //funcao que remove elemento
        }

    },
    getters: {
        getTotalCost(): number {
            let value = 0;
            this.robots.forEach(robot=>
                value +=robot.cost
            );
            return value;
        }
    }

})