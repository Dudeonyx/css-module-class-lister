# CSS Module Class Lister

[![Build Status](https://travis-ci.org/Dudeonyx/css-module-class-lister.svg?branch=master)](https://travis-ci.org/Dudeonyx/css-module-class-lister) [![dependencies Status](https://david-dm.org/Dudeonyx/css-module-class-lister/status.svg)](https://david-dm.org/Dudeonyx/css-module-class-lister) [![devDependencies Status](https://david-dm.org/Dudeonyx/css-module-class-lister/dev-status.svg)](https://david-dm.org/Dudeonyx/css-module-class-lister?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Add multiple classes from CSS module style objects** ✨

Adding multiple classes from CSS module style objects has never been easier
Or a readable

# Installation

    npm install css-module-class-lister

# Usage

  ```javascript
import React from 'react';
import styles from './mystyles.module.css'
import classLister from 'css-module-class-lister';

// console.log(styles);
// sample console output =>
// {
//   App: 'App_App__3TjUG',
//   'd-flex-c': 'App_d-flex-c__xpDp1',
// };

const classes = classLister(styles);

const App = (props) => {
    return (
      <div className={classes('App', 'bold', 'd-flex-c')}>
        <p>Blah Blah Blah</p>
      </div>
    );
};

export default App;

  ```

Note: 'bold' is ignored since it is not defined in styles.module.css

This results in:

  ```html
   <div class="App_App__3TjUG App_d-flex-c__xpDp1">
     <p>Blah Blah Blah</p>
   </div>

  ```

# License

MIT © Dinesh Pandiyan
