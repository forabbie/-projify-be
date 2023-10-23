<template>
  <div
    :id="id"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    data-modal-backdrop="static"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          :data-modal-hide="id"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">{{ action }} Task</h3>
          <vee-form class="mt-8 space-y-6" :validation-schema="schema" @submit="onsave">
            <div
              class="text-white text-center font-bold p-4 mb-4"
              v-if="show_alert"
              :class="alert_variant"
            >
              {{ alert_msg }}
            </div>
            <FieldInputGroup>
              <template #label>
                <FieldInputLabel label="Title" label_for="input-task-title" />
              </template>
              <template #field>
                <FieldInput
                  :data="data.title"
                  type="text"
                  name="task-title"
                  id="input-task-title"
                  placeholder=""
                  :class="inputTextClass"
                />
              </template>
              <template #error>
                <ErrorMessage class="text-red-600" name="task-title" />
              </template>
            </FieldInputGroup>

            <FieldInputGroup>
              <template #label>
                <FieldInputLabel
                  label="Description (optional)"
                  label_for="input-task-description"
                />
              </template>
              <template #field>
                <FieldInput
                  :data="data.description"
                  as="textarea"
                  name="task-description"
                  id="input-task-description"
                  placeholder=""
                  :class="inputTextAreaClass"
                  cols="30"
                  rows="5"
                />
              </template>
              <template #error>
                <ErrorMessage class="text-red-600" name="task-description" />
              </template>
            </FieldInputGroup>

            <FieldInputGroup>
              <template #label>
                <FieldInputLabel label="Owner (optional)" label_for="input-task-owner" />
              </template>
              <template #field>
                <select
                  v-model="member"
                  id="input-owner"
                  name="task-owner"
                  class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                >
                  <option value="">Select the owner</option>
                  <option v-for="(member, index) in members" :key="index" :value="member?.id">
                    {{ member?.email }}
                  </option>
                </select>
              </template>
              <template #error>
                <ErrorMessage class="text-red-600" name="task-owner" />
              </template>
            </FieldInputGroup>

            <FieldInputGroup>
              <template #label>
                <FieldInputLabel label="Deadline (optional)" label_for="input-task-deadline" />
              </template>
              <template #field>
                <FieldInput
                  :data="data.deadline"
                  type="date"
                  name="task-deadline"
                  id="input-task-deadline"
                  placeholder=""
                  :class="inputTextClass"
                />
              </template>
              <template #error>
                <ErrorMessage class="text-red-600" name="task-deadline" />
              </template>
            </FieldInputGroup>

            <div class="grid grid-cols-2 gap-4">
              <FieldInputGroup>
                <template #label>
                  <FieldInputLabel label="Status" label_for="input-task-status" />
                </template>
                <template #field>
                  <select
                    v-model="status"
                    id="input-status"
                    name="task-status"
                    class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  >
                    <option v-for="(item, index) in statuses" :key="index" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </template>
                <template #error>
                  <ErrorMessage class="text-red-600" name="task-status" />
                </template>
              </FieldInputGroup>

              <FieldInputGroup>
                <template #label>
                  <FieldInputLabel label="Priority" label_for="input-task-priority" />
                </template>
                <template #field>
                  <select
                    v-model="priority"
                    id="input-priority"
                    name="task-priority"
                    class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  >
                    <option v-for="(item, index) in priorities" :key="index" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </template>
                <template #error>
                  <ErrorMessage class="text-red-600" name="task-priority" />
                </template>
              </FieldInputGroup>
            </div>

            <FieldInputGroup>
              <template #label>
                <FieldInputLabel label="Notes (optional)" label_for="input-task-notes" />
              </template>
              <template #field>
                <FieldInput
                  :data="data.notes"
                  as="textarea"
                  name="task-notes"
                  id="input-task-notes"
                  placeholder=""
                  :class="inputTextAreaClass"
                  cols="20"
                  rows="2"
                />
              </template>
              <template #error>
                <ErrorMessage class="text-red-600" name="task-notes" />
              </template>
            </FieldInputGroup>

            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style="transition: all 0.15s ease 0s"
              :disabled="submission"
            >
              Save
            </button>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import FieldInput from '@/components/elements/FieldInput.vue'
import FieldInputGroup from '@/components/elements/FieldInputGroup.vue'
import FieldInputLabel from '@/components/elements/FieldInputLabel.vue'
import useTaskStore from '@/stores/task'

const emit = defineEmits(['onAction'])

const taskStore = useTaskStore()
const props = defineProps({
  id: String,
  data: Object,
  members: Object,
  label: String,
  onAction: Function,
  action: String
})
const id = ref(props.id)
const data = ref(computed(() => (props.action == 'New' ? props.data : taskStore.task)))
const task = ref(computed(() => taskStore.task))

const inputTextClass = ref(
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
)
const inputTextAreaClass = ref(
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
)

const schema = ref(computed(() => taskStore.schema))
const submission = ref(computed(() => taskStore.submission))
const show_alert = ref(computed(() => taskStore.show_alert))
const alert_variant = ref(computed(() => taskStore.alert_variant))
const alert_msg = ref(computed(() => taskStore.alert_msg))

const priorities = ref(computed(() => taskStore.priorities))
const statuses = ref(computed(() => taskStore.statuses))
const member = ref(data.value?.owner)
const status = ref(data.value?.status)
const priority = ref(data.value?.priority)

const onsave = (value) => {
  const action = props.action
  const data = {}
  data.title = value['task-title']
  data.description = value['task-description']
  data.deadline = value['task-deadline']
  data.notes = value['task-notes']
  data.owner = member.value
  data.status = status.value
  data.priority = priority.value
  emit('onAction', data, action)
}

watch(task, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    data.value = newValue
    priority.value = newValue.priority
    status.value = newValue.status
    member.value = newValue.owner
  }
})
</script>
