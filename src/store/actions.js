import { getNewsList } from '../api/index.js';

export default{
    GET_NEWS_LIST(context){
      getNewsList()
      .then(({ data }) =>{
         context.commit('SET_NEWS',data);
      })
      .catch(error => console.log(error));
    },
}

