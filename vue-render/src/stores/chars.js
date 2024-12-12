import { defineStore } from 'pinia';
import { ref } from 'vue';

//establish store and export
export const useCharStore = defineStore('chars', () => {
	//utilize refs to values that are being watch
	const chars = ref([]);
	const loading = ref(false);
	const error = ref(null);

	/**
	 * @description this function will utilize the fetch Api to receive the chars and change the necessary references to be later used in the vue file
	 */
	const fetchChars = async () => {
		//if the loading ref has a truthy value
		//function will be finalized because it's still in process
		if (loading.value) {
			return;
		}

		try {
			//url is hardcoded for demonstration purposes, normally this will be obtained dynamically from an outer source
			const response = await fetch(
				'https://hp-api.herokuapp.com/api/characters/house/gryffindor',
				{
          //specifying what type of response we are awaiting
					headers: {
						Accept: 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Failed to fetch chars');
			}
			chars.value = await response.json();
		} catch (err) {
      //assign err message to error ref
			error.value = err.message;
		} finally {
      //operation completed , reset loading
			loading.value = false;
		}
	};
  return {
    chars,
    loading,
    error,
    fetchChars,
  }
});
