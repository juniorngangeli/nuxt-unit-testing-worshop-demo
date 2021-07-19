import { mount } from '@vue/test-utils'
import TaskListItem from '../components/TaskListItem'

describe('TaskList tests suites', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TaskListItem, {
      propsData: {
        task: 'TaskName',
        onDelete: () => {},
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })
  test('expect to render task name', () => {
    const wrapper = mount(TaskListItem, {
      propsData: {
        task: 'TaskName',
        onDelete: () => {},
      },
    })
    const textContainer = wrapper.find('span')
    expect(textContainer.text()).toBe('TaskName')
  })

  test('expect onDelete to have been called once on button click', async () => {
    const onDelete = jest.fn()

    const wrapper = mount(TaskListItem, {
      propsData: {
        task: 'TaskName',
        onDelete,
      },
    })

    const submitButton = wrapper.find('button')
    await submitButton.trigger('click')

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
