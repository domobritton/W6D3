const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = $(el).data('user-id'); 
    this.followState = $(el).data('initial-follow-state');
    this.render();
    $(el).on('click', this.handleClick.bind(this));
  }
  
  handleClick(e) {
    e.preventDefault();
  
    if (this.followState === false) {
      this.followState = 'following...';
      this.render();
      APIUtil.followUser(this.userId)
        .then(() => {
          this.followState = true;
          this.render();
        });
    } else {
      this.followState = 'unfollowing...'; 
      this.render();
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = false;
          this.render();
        });
    }
  }
  
  render() {
    if (this.followState === 'following...') {
      this.el.html('following...');
      this.el.prop("disabled", true);
    } else if (this.followState === 'unfollowing...') {
      this.el.html('unfollowing...');
      this.el.prop("disabled", true);
    } else if (this.followState === false) {
      this.el.html('Follow');
      this.el.prop("disabled", false);
    } else {
      this.el.html('Unfollow!');
      this.el.prop("disabled", false);
    }
  }
}

module.exports = FollowToggle;