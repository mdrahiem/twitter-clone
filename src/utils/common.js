export function getSortedList(array, sortBy) { // to sort an array by type
  return array.sort(function(a,b){
    return new Date(b[sortBy]) - new Date(a[sortBy]);
  });
}