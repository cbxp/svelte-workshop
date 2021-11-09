Sample language files
=====================

Access them using:

```ts
const langs = await fetch('/i18n/langs.json').then(r => r.json())
```

In tests, you can import them:
```ts
import langs from '../i18n/langs.json'
```

See [i18n.test.ts](../src/i18n.test.ts)
