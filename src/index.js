/**
 * Simple Ajax/xhr module that utilzes GitHub's whatwg-fetch implementation.
 * Since the "fetch" implementation relies on ES6 Promises,
 * older browsers need a ES6 Promise polyfill.
 *
 * - https://github.com/github/fetch
 * - https://github.com/stefanpenner/es6-promise
 * - http://caniuse.com/#feat=promises
 *
 * Author: Carsten Witt, Germania KG
 */
(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		// require.js/AMD: deps must be available or shimmed in require.js config
		define(["whatwg-fetch"], factory);
	} else if (typeof exports === "object") {
		// Node/CommonJS: make modules available via package.json
		factory(require("whatwg-fetch"));
	} else {
		// Browser globals
		factory();
	}
}(this, function () {

	// ES6 Promise polyfill, "just the require"
	// See: https://github.com/stefanpenner/es6-promise
	require("es6-promise").polyfill();

}));
