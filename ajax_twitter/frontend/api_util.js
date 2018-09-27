const APIUtil = {
  followUser: id => (
    $.ajax ({
      url: `/users/${id}/follow`,
      method: 'POST',
      data: {
        follows: {
          followee_id: id
        }
      }, 
      dataType: 'JSON'
    })
  ),
  
  unfollowUser: id => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      data: {
        follows: {
          followee_id: id
        }
      }, 
      dataType: 'JSON'
    });
  },
  
  searchUsers(queryVal, success) {
    $.ajax ({
      url: '/users/search',
      method: 'GET',
      data: {
        users: {
          username: queryVal
        }
      },
      dataType: 'JSON', 
      success: success
    });
  }
};

module.exports = APIUtil;