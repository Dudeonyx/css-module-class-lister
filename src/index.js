// func below returns a function that takes a list of classes as an argument
// and turns it in an array with the spread operator and reduces it into a spaced string

const classLister = styleObject => (...classList) => classList.reduce((list, myClass) => {
  let output = list;
  if (styleObject[myClass]) {
    if (list) output += ' '; // appends a space if list is not empty
    output += styleObject[myClass];
  }
  // Above: append 'myClass' to the list if it exists in styleObject
  return output;
}, '');

export default classLister;
