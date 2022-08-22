<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        placeholder="Поиск.."
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        v-focus
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog
        v-model:show="dialogVisible"
    >
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идёт загрузка...</div>

    <div class="observer" v-intersection="loadMorePosts"></div>
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--          v-for="pageNumber in totalPages"-->
    <!--          :key="page"-->
    <!--          class="page"-->
    <!--          :class="{'current-page': page === pageNumber}"-->
    <!--          @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';


export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm
  },

  name: "PostPageStore",
  data() {
    return {
      // posts : [],
       dialogVisible: false,
      // isPostLoading: false,
      // selectedSort: '',
      // sortOptions: [
      //   {
      //     value: 'title',
      //     name: 'По названию'
      //   },
      //   {
      //     value: 'body',
      //     name: 'По содержимому'
      //   }
      // ],
      // searchQuery: '',
      // page: 1,
      // limit: 10,
      // totalPages: 0
    }
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),

    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },

    showDialog() {
      this.dialogVisible = true;
    },

    // async fetchPosts() {
    //   try {
    //     this.isPostLoading = true
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     });
    //     this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
    //     this.posts = response.data;
    //     this.isPostLoading = false;
    //   } catch (e) {
    //     console.log('Ошибка', e.message)
    //   } finally {
    //
    //   }
    // },

    // async loadMorePosts() {
    //   try {
    //     this.page++
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     });
    //     this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
    //     this.posts = [...this.posts, ...response.data];
    //   } catch (e) {
    //     console.log('Ошибка', e.message)
    //   } finally {
    //
    //   }
    // },

    // changePage(pageNum) {
    //   if (pageNum !== this.page) {
    //     this.page = pageNum;
    //   }
    // }
  },

  mounted() {
    this.fetchPosts();

    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    //
    // observer.observe(this.$refs.observer);
  },

  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
    }),

    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })

    // sortedPosts() {
    //   return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    // },
    //
    // sortedAndSearchedPosts() {
    //   return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    // }
  },


  watch: {
    // page() {
    //   this.fetchPosts()
    // }
    //   selectedSort(newValue) {
    //     this.posts.sort((post1, post2) => {
    //       return post1[newValue]?.localeCompare(post2[newValue])
    //     })
    //   }
    // }
  }
}
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: greenyellow;
}
</style>