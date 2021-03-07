import axios from 'axios';

export default {
  searchOnGithub(_, params) {
    axios.get(`https://api.github.com/search/${params.type}?q=${params.searchParameter}`);
  },
};
