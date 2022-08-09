<template>
  <div class="bg-gray-600 bg-opacity-10 border border-dotted rounded-xl border-gray-600">
    <v-container class="grey lighten-5">
      <v-row class="text-center">
        <v-col cols="3" class="item-padding-no">
          <v-icon small>
            mdi-wallet-outline
          </v-icon>
          <span>Total: {{ task.length + task_Un.length }}</span>
        </v-col>
        <v-col cols="3" class="item-padding-no">
          <v-icon small>
            mdi-puzzle-outline
          </v-icon>
          <span>Unfinish: {{ task.length }}</span>
        </v-col>
        <v-col cols="3" class="item-padding-no">
          <v-icon small>
            mdi-cloud-check-outline trending-up
          </v-icon>
          <span>Done: {{ task_Un.length }}</span>
        </v-col>
        <v-col cols="3" class="item-padding-no">
          <v-icon small>
            mdi-trending-up
          </v-icon>
          <span>Process: {{ process() }}%</span>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-icon small>
          mdi-pencil
        </v-icon>
        <span>Last note: {{ dateTimeNow() }}</span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AddFooter',
  props: ['task', 'task_Un'],
  methods: {
    process () {
      return parseFloat((this.task_Un.length * 100 / (this.task.length + this.task_Un.length)).toString()).toFixed(2)
    },
    dateTimeNow () {
      if (this.task.length > 0) {
        return moment(String(new Date())).format('MM/DD/YYYY hh:mm:ss')
      }
    }
  }
}
</script>

<style scoped>
  .item-padding-no {
    padding: 0;
  }
</style>
