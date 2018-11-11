// func below returns a function that takes a list of classes as an argument
// and turns it in an array with the spread operator and reduces it into a spaced string

const classLister = styleObject => (...classList) => {
  const generateClassString = (list, myClass) => {
    let output = list;
    if (output) {
      output += ' '; // appends a space if list is not empty
    }
    if (Array.isArray(myClass)) {
      output += myClass.reduce(generateClassString, ''); // recursion to deal with Arrays
    } else if (styleObject[myClass]) {
      output += styleObject[myClass];
      // append styleObject['myClass'] value to the list if it is defined in styleObject
    } else if (typeof myClass === 'string') {
      output += myClass; // append 'myClass' directly to the list
    }

    return output;
  };
  classList.reduce(generateClassString, '');
};

export default classLister;
