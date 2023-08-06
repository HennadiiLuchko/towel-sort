
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
   if (matrix === undefined) {
    return [];
  };

  if (matrix.length === 0) {
    return [];
  };

  if (matrix.length > 0) {
    
    matrix.reduce((acc, cur, i) => {
      return acc.concat((!(i % 2) ? cur : cur.reverse()));
    });
   
    return matrix.flat();

  }
}
