function toggleCheckedById(id,key,arr) {
  let children = []
  let checked = false
  if(!id) return 
  arr.forEach((item,index)=>{
    console.log(id,key)
    if( id === item[key]){
      item.checked = checked = !item.checked
      if(!item.checked) {
        toogleParent(item)
      }
      children = item.children
    }
  })
  return deepResponse(checked,children)
}

function toogleParent(item) {
  if(!item.parent) return 
    item.parent.checked = false
    toogleParent(item.parent)
}

function deepResponse(checked,arr) {
  arr.forEach((item,index)=>{
    item.checked = checked
    deepResponse(checked,item.children)
  })
}

function sortArray(arr) {
  let items = {};
  for(let i = 0; i < arr.length; i++) {
    let key = arr[i].parentId;
    if(!items[key]) {
      items[key] = []
    }
    items[key].push(arr[i]);
  }
  return items
}

function getTree(arr, parentId, key) {
  let items = {};
  for(let i = 0; i < arr.length; i++) {
    let keyname = arr[i].parentId;
    if(!items[keyname]) {
      items[keyname] = []
    }
    items[keyname].push(arr[i]);
  }
  return formatTree(items, parentId, key);
}

function formatTree(items, parentId, key, parent) {
  let result = [];
  if(!items[parentId]) {
    return result;
  }
  for(let t of items[parentId]) {
    t.children = formatTree(items, t[key], key, t)
    t.parent = parent||{}
    result.push(t);
  }
  return result;
}


function getKey(str) {
  var query = location.hash;
  query = query.slice(query.indexOf('?') + 1);
  var vars = query.split("&");
  for(var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if(pair[0] == str) {
      return pair[1];
    }
  }
  return false;
}

function getChecked(arr,key) {
  let check = []
  searchChecked(check,arr,key)
  return check
}

function searchChecked(check,arr,key) {
  arr.forEach((item,index)=>{
    if(item[key] && item.checked) {
      check.push(item)
    }else if(!item[key]){
      if(item.children.length>0) {
        searchChecked(check,item.children,key)
      }else {
        return
      }
    }
  })
  return check
}
export default {
  sortArray: sortArray,
  getTree: getTree,
  getKey: getKey,
  toggleCheckedById:toggleCheckedById,
  getChecked:getChecked
}