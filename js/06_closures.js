/* function sayHelloTo(name) {
    const message = 'Hello ' + name

    return function() {
        console.log(message)
    }
}

const helloToElena = sayHelloTo('Elena')
helloToElena() */
/* 
function createFrameWorkManager() {
    const fw = ['Angular','React']
    return {
        print: function() {
            console.log(fw)
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
    
}

const manager = createFrameWorkManager()
console.log(manager.print());
console.log(manager.add('Vue'));
console.log(manager.print());
 */
// setTimeout
const fib = [1,2,3,5,8,13]
for (var i = 0; i < fib.length; i++) {
    (function(j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500);
    })(i)
}