<template>
  <div class="grid w-screen h-screen justify-center items-center text-gray-700 ">
    <div class="flex items-center">
      <img class="w-12 h-12" src="/image/label_main.png" alt="Vue logo">
      <h1 class="header-text text-5xl">
        MODERN NOTE FOR US
      </h1>
    </div>
    <add-todo />
    <div class="tasks flex-row">
      <div class="flex justify-center">
        <h2 class="text-1xl mt-1 mr-1">
          UNCOMPLETED
        </h2>
      </div>
      <div class="tasks">
        <ol v-scroll:throttle="{fn: onScroll, throttle: 500 }">
          <un-completed
            v-for="(task,index) in $store.state.tasks"
            :key="index"
            :index="index"
            :task="task"
          />
        </ol>
      </div>
      <v-row>
        <v-divider class="divider-complete h-2" />
      </v-row>
      <div class="flex justify-center mt-3">
        <h2 class="text-1xl mt-1 mr-1">
          COMPLETED
        </h2>
      </div>
      <div class="task">
        <ol v-scroll:throttle="{fn: onScroll, throttle: 500 }">
          <completed
            v-for="(task,index) in $store.state.task_Un"
            :key="index"
            :index="index"
            :task="task"
          />
        </ol>
      </div>
    </div>
    <add-footer
      :task="$store.state.tasks"
      :task_Un="$store.state.task_Un"
    />
  </div>
</template>

<script>
import AddTodo from '@/components/todo/AddTodo'
import UnCompleted from '@/components/todo/UnCompleted'
import AddFooter from '@/components/todo/AddFooter'
import Completed from '@/components/todo/Completed'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  components: { Completed, AddTodo, UnCompleted, AddFooter },
  methods: {
    onScroll (e, position) {
      this.position = position
    }
  }
}
</script>
<style scoped>
  .divider-complete {
    border-width: thin 0 1px 0;
    border-color: #6b7280;
  }
  ol {
    max-height: 11rem;
    padding: 0;
    overflow: auto;
    list-style: none;
    font-size: 14px;
    margin-bottom: 18px;
  }
</style>
