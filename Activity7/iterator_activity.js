function create_Iterator(start, end, step) {
    let current=start;
  return {
    next() {
      if (current > end) return { done: true };
      const result = { value: current, done: false };
      current += step;
      return result;
    }
  };
}
function generate_Sequence(start, end, step, print_callback) {
  const iterator = create_Iterator(start, end, step);
  let result = iterator.next();
  
  while (!result.done) {
    print_callback(result.value);
    result = iterator.next();
  }
}
generate_Sequence(0,50,5,console.log);

