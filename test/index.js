import { assert } from 'chai';
import classLister from '../src';

describe('Class lister test.', () => {
  it('should return a function scoped to a style object', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
      redDiv: 'App_redDiv_fg3AS',
      'blue-div': 'App_blue-div_jYaS7',
    };

    assert(typeof classLister(sampleStyleObject) === 'function', 'Check return statement');
  });

  it('the sub-function should return a string', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
      redDiv: 'App_redDiv_fg3AS',
      'blue-div': 'App_blue-div_jYaS7',
    };
    const classes = classLister(sampleStyleObject);
    assert(
      typeof classes('App', 'misspelt-class', 'redDiv', 'div-class', 'd-flex-c') === 'string',
      'sub-function not returning string'
    );
  });
  it('the sub-function should return a spaced string of valid classes', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
      redDiv: 'App_redDiv_fg3AS',
      'blue-div': 'App_blue-div_jYaS7',
    };
    const classes = classLister(sampleStyleObject);
    const expectedVal = 'App_App__3TjUG misspelt-class App_redDiv_fg3AS div-class App_d-flex-c__xpDp1';
    assert(
      classes('App', 'misspelt-class', 'redDiv', 'div-class', 'd-flex-c') === expectedVal,
      'sub-function not returning spaced string of valid classes'
    );
  });

  it('sub-function should work with an array as input', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
      redDiv: 'App_redDiv_fg3AS',
      'blue-div': 'App_blue-div_jYaS7',
    };
    const classes = classLister(sampleStyleObject);
    const expectedVal = 'App_App__3TjUG misspelt-class App_redDiv_fg3AS App_blue-div_jYaS7 App_d-flex-c__xpDp1';
    assert(
      classes(['App', 'misspelt-class', 'redDiv', 'blue-div', 'd-flex-c']) === expectedVal,
      'sub-function not returning spaced string of valid classes'
    );
  });

  it('sub-function should work with a mix of array and strings as input', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
      redDiv: 'App_redDiv_fg3AS',
      'blue-div': 'App_blue-div_jYaS7',
    };
    const classes = classLister(sampleStyleObject);
    const expectedVal = 'App_App__3TjUG misspelt-class App_redDiv_fg3AS fake-class App_blue-div_jYaS7 App_d-flex-c__xpDp1';
    assert(
      classes(['App', 'misspelt-class'], 'redDiv', 'fake-class', ['blue-div', 'd-flex-c'])
        === expectedVal,
      'sub-function not returning spaced string of valid classes when input is arrays and strings mixed'
    );
  });
});
