function undefinedToNull(arg) {
  for (var key in arg) {
    if (typeof arg[key] === 'object') {
      undefinedToNull(arg[key]);
    }
    if (arg[key] === undefined) {
      arg[key] = null;
    }
  }
  return arg;
}