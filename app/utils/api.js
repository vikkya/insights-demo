var axios = require('axios');
//var qs = require('qs');
//var config = {headers: {
        //'content-type': 'application/x-www-form-urlencoded'}
//}
module.exports = {
  fetchPopularRepos: (language) => {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  },
  browserLevel: function(id,startDate, endDate){
    var encodedURI = window.encodeURI('https://randomuser.me/api/');
    return axios.get(encodedURI) 
    .then(function(response){
        return response.data.results;
    })
    //Tyler if i make another api call here each function will be called three times. so on.
}
}
