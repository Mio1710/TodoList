<template>
  <div>
    <div class="flex mb-1">
      <div class="item-padding-no bg-white bg-opacity-20 text-center rounded-lg m-5px text-2xl leading-9 w-1/12 mr-2 line-through  bg-green-600 text-opacity-20">
        <span>{{ index }}</span>
      </div>
      <div class="item-padding-no bg-white bg-opacity-20 h-10 rounded-lg w-11/12  bg-green-700 text-opacity-40">
        <div class="flex justify-between">
          <div class="text-2xl leading-9 ml-3 line-through">
            <span>{{ task.content }}</span>
          </div>
          <div>
            <span
              class="leading-9 mr-12 cursor-pointer"
              @click="removeTask"
            >
              <v-icon class="hover:-translate-y-1">
                mdi-trash-can-outline
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Completed',
  props: ['task', 'index'],
  methods: {
    removeTask () {
      this.$store.commit('REMOVE_TASK_UN', this.task)
    }
  }
}
</script>

<style scoped>

</style>
