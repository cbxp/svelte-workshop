import {render} from '@testing-library/svelte'
import {expect} from 'chai'
import App from './App.svelte'

describe('App', () => {
  it('renders learn svelte link', () => {
    const {getByText, container} = render(App)
    const linkElement = getByText(/learn svelte/i)
    expect(linkElement).to.exist
    expect(container.contains(linkElement))
  })
})
