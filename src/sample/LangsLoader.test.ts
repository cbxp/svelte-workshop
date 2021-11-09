import {act, render} from '@testing-library/svelte'
import {expect} from 'chai'
import LangsLoader from './LangsLoader.svelte'
import {stub} from 'sinon'

describe('LangsLoader', () => {
  beforeEach(() => {
    stub(window, 'fetch').resolves({json: async () => ['et', 'ja']} as Response)
  })

  it('renders', async () => {
    const {container} = render(LangsLoader, {url: '/some/url'})
    expect(fetch).calledWith('/some/url')
    await act(fetch)
    await act(fetch)
    expect(container.querySelector('.langs')!.textContent).to.contain('1. et').and.contain('2. ja')
  })
})
