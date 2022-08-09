<template id="task-list">
  <div class="tasks flex justify-center items-center gap-x-1.5 h-10">
    <v-text-field
      v-model="task.content"
      class="input-group-field w-11/12"
      placeholder="✎ add somethings daily to do..."
      background-color="#fff"
      outlined:none
      rounded
      height="2.5rem"
      @keypress.enter="addTask"
    />
    <v-btn
      class="button input-group-button mx-1 mb-1 hover:-translate-y-1"
      fab
      dark
      color="indigo"
      height="40px"
      width="40px"
      margin-buttom="2px"
      @click="addTask"
    >
      <v-icon>
        mdi-bookmark-multiple-outline
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data () {
    return {
      task: {
        content: '',
        done: false
      }
    }
  },
  methods: {
    addTask () {
      if (this.task) {
        if (this.task.content !== '') {
          this.$store.commit('ADD_TASK', this.task)
          this.task.content = ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
