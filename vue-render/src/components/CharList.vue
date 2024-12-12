  <!--Template-->
  <template>
    <div v-if="loading">Loading...</div>

    <div v-else-if="error">{{ error }}</div>

    <ul v-else>
      <li v-for="char in charsWithImages" :key="char.id">
        <div class="profileImgContainer">
          <img class="profileImg" :src="char.image" />
        </div>
        <h3>{{ char.name }}</h3>
      </li>
    </ul>
  </template>

  <!--Script-->
  <script setup>
  //lifecycle methods
  import { onMounted, onUpdated, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCharStore } from '../stores/chars'

  //initiate the component
  const store = useCharStore();
  const { chars, loading, error } = storeToRefs(store);

  /**
   * @description filters characters only with image prop available
   */
  const charsWithImages = computed(() => {
   return chars.value.filter(char => char.image);
  })
  onMounted(() => {
    store.fetchChars();
  });
  
  </script>


  <!--Style-->
  <style>

  body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;

  }
  ul {
    list-style-type: none;
    padding-top: 20px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profileImg {
    height: 35px;
    width: 30px;
    border-radius: 50%;
  }

  .profileImg:hover {
    transform: scale(3.0);
    cursor: auto;
  }
  </style>