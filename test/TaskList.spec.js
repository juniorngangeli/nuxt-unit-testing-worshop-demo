import { mount } from '@vue/test-utils'
import TaskList from '../components/TaskList'
import CreateTaskInput from '../components/CreateTaskInput'
import TaskListItem from '../components/TaskListItem'

describe('TaskList tests suites', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TaskList, {
      propsData: {
        tasks: [],
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })
  test('its render 3 TaskListItem', () => {
    const wrapper = mount(TaskList, {
      propsData: {
        tasks: ['One', 'Two', 'Three'],
      },
    })

    expect(wrapper.findAllComponents(TaskListItem)).toHaveLength(3)
  })
  test('its render a TaskListInput ', () => {
    const wrapper = mount(TaskList, {
      propsData: {
        tasks: [],
      },
    })

    expect(wrapper.findAllComponents(CreateTaskInput)).toHaveLength(1)
  })
})
