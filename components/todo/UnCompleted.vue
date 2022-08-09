<template>
  <div>
    <div class="flex mb-1">
      <div class="item-padding-no bg-white bg-opacity-20 text-center rounded-lg m-5px text-2xl leading-9 w-1/12 mr-2 ">
        <span>{{ index }}</span>
      </div>
      <div class="item-padding-no bg-white bg-opacity-20 h-10 rounded-lg w-11/12">
        <div class="flex justify-between">
          <div class="content text-2xl leading-9 ml-3">
            <span>{{ task.content }}</span>
          </div>
          <div>
            <span
              class="leading-9 mr-1 cursor-pointer"
              @click="removeTask"
            >
              <v-icon
                class="hover:-translate-y-1"
              >
                mdi-trash-can-outline
              </v-icon>
            </span>
            <span
              class="mr-4 cursor-pointer"
              @click="toggleDone"
            >
              <v-icon class="hover:-translate-y-1">
                mdi-check-all
              </v-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UnCompleted',
  props: ['task', 'index'],
  methods: {
    removeTask () {
      this.$store.commit('REMOVE_TASK', this.task)
    },
    toggleDone () {
      this.$store.commit('TOGGLE_TASK', this.task)
      if (this.task.done === true) {
        this.$store.commit('ADD_TASK', this.task)
        this.$store.commit('REMOVE_TASK', this.task)
      }
    }
  }
}
</script>

<style scoped>

</style>
