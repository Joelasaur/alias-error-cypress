import { testFunction } from '../support/helper/helpers'

it ('will pass using import alias', () => {
    expect(testFunction()).to.eq('test2');
});