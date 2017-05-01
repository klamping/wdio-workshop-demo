var expect = require('chai').expect;

describe('Login Page', function () {
  it('should be titled properly', function () {
    browser.url('');

    var title = browser.getTitle();

    expect(title).to.equal('Login Page')
  })

  it('should contain the correct url', function () {
    browser.url('');

    var url = browser.getUrl();
    expect(url).to.contain('/example/');
  })
})