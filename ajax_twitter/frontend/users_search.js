const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el) {
    this.el = $(el);
    this.input = this.el.find('input');
    this.ul = this.el.find('ul');
    this.input.on('keyup', this.handleInput.bind(this));
  }
  
  handleInput(e) {
    console.log(e.currentTarget.value);
  }
}

module.exports = UsersSearch;