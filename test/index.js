import { assert } from 'chai';
import classLister from '../src';

const sampleStyleObject = {
  App: 'App_App__3TjUG',
  'd-flex-c': 'App_d-flex-c__xpDp1',
};

describe('Class lister test.', () => {
  it('should return a function scoped to a style object', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
    };
    assert(typeof classLister(sampleStyleObject) === 'function', 'Check return statement');
  });

  it('the returned function should return a spaced string of valid classes', () => {
    const sampleStyleObject = {
      App: 'App_App__3TjUG',
      'd-flex-c': 'App_d-flex-c__xpDp1',
    };
    const classes = classLister(sampleStyleObject);
    const expectedVal = 'App_App__3TjUG App_d-flex-c__xpDp1';
    assert(
      classes('App', 'bold', 'app', 'div', 'd-flex-c') === expectedVal,
      'Something went wrong'
    );
  });
});
