// Write whatever additional code you want to be included
// This could be webcomponents added directly here or using import statements
// to pull in and reference other web components / ES module compliant libraries.
// utilize bare imports like import "@things/stuff/stuff.js"; and ensure you reference the js file directly
// to make a custom theme see the following for a well documented fully working example
// https://github.com/elmsln/lrnwebcomponents/blob/master/elements/example-haxcms-theme/example-haxcms-theme.js
// don't import that directory, we'd recommend copy and pasting it in here or
// creating your own theme based on it

// custom styles
let root = document.documentElement;
let body = document.body
root.style.setProperty('--haxcms-base-styles-list-padding-bottom', 'none');
body.style.setProperty('line-height', '1.75');
body.style.setProperty('--haxcms-base-styles-list-max-width', 'none');

setTimeout(() => {
  body.style.setProperty('--haxcms-color', '#fff');
}, 1000)

console.log('killswitch')