import { mount } from '@vue/test-utils'
import CreateTaskInput from '../components/CreateTaskInput'

describe('CreateTaskInput tests suites', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CreateTaskInput, {
      propsData: {},
    })

    expect(wrapper.vm).toBeTruthy()
  })

  test('it emit submitted event on button click', async () => {
    const wrapper = mount(CreateTaskInput, {
      propsData: {},
    })

    const createTaskButton = wrapper.find('button')
    await createTaskButton.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().submitted).toBeTruthy()
  })
})
