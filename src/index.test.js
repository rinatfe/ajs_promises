import GameSavingLoader from "./index";
import json from "./json";
import read from "./read";

test('promise',()=> {
    let obj = new GameSavingLoader(); 
        obj.load().then(item => { json(item).then( i=> {
            expect(i).toEqual({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
        });
    });    
});





