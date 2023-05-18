var x = {},y;
(
    () => {
        Object.defineProperty(require('./testeClass3.js'),'y',{value: true})  
    }
)()
console.log(x,y)