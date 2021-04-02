import read from "./read";
import json from "./json";
//import { reject, resolve } from "core-js/fn/promise";
export default class GameSavingLoader {
    constructor(){
   
    }

    load(){
        return new Promise((resolve, reject) => {
        let obj;
        read().then(result=> {
            json(result).then(item=> { obj = item
                for(let key in JSON.parse(obj)){
                    this[key] = JSON.parse(obj)[key]
                }
            });
        });      
        resolve(this);
        });
    }
}