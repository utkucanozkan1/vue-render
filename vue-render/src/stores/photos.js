import { defineStore } from 'pinia';

  //establish articleStore to fetch articles to render
  export const usePhotosStore = () => {

    //state
    state: () => {
      return {
        photos : [],
        //to be used for conditional rendering
        loading: false,
        //to be used for error handling
        error: null
      }
    },
    //actions
    actions: {
      async initApiCall(url){
        const controller = new AbortController();
        //async fetch
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal
        });
      if(!response.ok){
        const error - new Error('Unable to fetch photos');
        error.status = response.status;
        error.statusText = response.statusText;
        console.log('err',error);
        }
        return response.json();
      }

      async fetchPosts(){
        //return if the operation is still on going
          //loading variable tracks this with a boolean value
        if(!!this.loading) return;
            //continue
            this.loading = true;
            this.error = null;
            //try - catch block
            try {
            this.posts = await initApiCall("https://jsonplaceholder.typicode.com/photos")
            } catch(err){
              this.err = err.status;
              throw err;
            } finally {
              //reset loading variable
              this.loading = false;
            }
      }
    }




        }

