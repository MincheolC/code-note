const { printHelloWorld } = require('../jestTest');

describe('jestTest', () => {
  it('should print "Hello World"', () => {
    jest.spyOn(global.console, 'log');
    printHelloWorld();

    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith('hello world');
  });
});
