function _filter(list, predi) {
  var newList = [];
  _each(list, function(val){
    if (predi(val)) {
      newList.push(val);
    }
  });
  return newList;
}

function _map(list, mapper) {
  var newList = [];
  _each(list, function(val){
    newList.push(mapper(val));
  });
  return newList;
}

function _each(list, iter) {
  for (var i = 0; i < list.length; i++ ) {
    iter(list[i]);
  }
  return list;
}