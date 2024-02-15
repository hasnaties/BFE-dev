function undefinedToNull(arg) {
  for (var key in arg) {
    if (typeof arg[key] === 'object') {
      undefinedToNull(arg[key]);
    }
    if (arg[key] === undefined) {
      arg[key] = null;
    }
  }
}
var obj =  {a:undefined,b:"BFE.dev", b: {c: 's'}};
undefinedToNull(obj);
console.log(obj);