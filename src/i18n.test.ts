import langs from '../i18n/langs.json'
import en from '../i18n/en.json'
import {expect} from 'chai'

describe('sample langs', () => {
  it('can be accessed', () => {
    expect(langs.includes('en')).to.be.true
    expect(en.title).to.exist
  })
})
