# requirehttpsync
require node modules from http server synchronously (including recursive module loading)

using node module sync request

sync is sometimes said to be against production, but its not 100% true, loading a few modules in the beginning of the program is not too bad.

After implementing some caching, like nodejs genric require does, we will also be able to load modules withinloops and function calls, without scaring about scability.


Usage
```javascript
var rhs=require("requirehttpsync");


var mod=rhs("https://raw.githubusercontent.com/neimanpinchas/requirehttpsync/master/test_module.js");

console.log(mod);

mod.hello();
```