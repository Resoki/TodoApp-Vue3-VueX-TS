<template>
  <div class="container">
    <InputName v-if='!getName' />
    <TodoInput v-if='getName'/>
    <TodoList v-if='getName' />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoInput from '../components/TodoInput.vue';
import TodoList from '../components/TodoList.vue';
import InputName from '../components/InputName.vue'
import { mapGetters } from 'vuex';


@Options({
  components: {TodoInput, TodoList, InputName},
   computed: {
      ...mapGetters(['getName'])
  }
})
export default class Home extends Vue {}
</script>
