function uniqueInOrder(iterable) {

    if (typeof iterable === 'string') {
      iterable = iterable.split('');
    }
    
    const result = [];
    let lastElement;
    for (const element of iterable) {
      if (element !== lastElement) {
        result.push(element);
      }
      lastElement = element;
    }
    
    return result;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));