<template>
  <q-page class="q-pa-md">
    <q-list 
      separator
      bordered>

      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"></task>
      
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('tasks',['tasks'])
  },
  components: {
    'task' : require('components/Tasks/Task.vue').default
  }
};
</script>
