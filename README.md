#ga-fetch

UMD Wrapper around [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) window.fetch JavaScript and [es6-promise](https://github.com/stefanpenner/es6-promise) ES6 Promise Polyfills.


##Installation

```bash
npm install ga-fetch --save
```

##Usage

Just require in your module. Needed ES6 promises are automically included. The Fetch API is available via `fetch()`, see [documentation.](https://github.github.io/fetch/)


```js
require('ga-fetch');

// Use fetch as normally:
fetch( 'url', {
	// options go here
});
```

##Develop with Gulp

Use [Git Flow](https://github.com/nvie/gitflow), always work in `develop` branch.

- Install development dependencies: `npm install`
- Run `gulp watch`
- Work in `src/`

Builds are now in `dist/`
