function curry(fn) {
  return (...a) => {
    if (a.length >= 3) {
      return fn(a[0], a[1], a[2]);
    } else {
      return (...b) => {
        if ((a.length + b.length) >= 3) {
          return fn(...a, ...b)
        } else {
          return (c) => {
            return fn(...a, ...b, c)
          }
        }
      }
    }
  }
}