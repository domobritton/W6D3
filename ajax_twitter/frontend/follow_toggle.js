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
      APIUtil.followUser(this.userId)
        .then(() => {
          this.followState = true;
          this.render();
        });
    } else {
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = false;
          this.render();
        });
    }
    // console.log(ajaxMethod);
    // $.ajax ({
    //   url: `/users/${this.userId}/follow`,
    //   method: ajaxMethod,
    //   data: {
    //     follows: {
    //       followee_id: this.userId
    //     }
    //   }, 
    //   dataType: 'JSON'
    // });
  }
  
  render() {
    if (this.followState === false) {
      this.el.html('Follow');
    } else {
      this.el.html('Unfollow!');
    }
  }
}

module.exports = FollowToggle;