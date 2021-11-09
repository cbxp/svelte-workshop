import {fireEvent, render} from '@testing-library/svelte'
import {expect} from 'chai'
import Dummy from './Dummy.svelte'

describe('Dummy', () => {
  it('renders button', () => {
    const {container} = render(Dummy, {text: 'Hello'})
    expect(container.querySelector('button')!.textContent).to.contain('Hello')
  })

  it('renders input with default value', () => {
    const {container} = render(Dummy, {text: ''})
    expect(container.querySelector('input')!.value).to.eq('123')
  })

  it('renders input with specified value', () => {
    const {container} = render(Dummy, {text: '', number: 999})
    const input = container.querySelector('input')!
    expect(input.value).to.eq('999')
  })

  it('increments number on click', async () => {
    const {container, getByText} = render(Dummy, {text: 'Mega', number: 999})
    await fireEvent.click(getByText('Mega'))
    expect(container.querySelector('input')).to.have.property('value', '1000')
  })
})
