# vue-dynamic-filters

[DEMO](https://mostafaelgamal.github.io/vue-dynamics-filters/)

Making dynamic filters was never this easy!

This is for `vue 2.x`

## Installing

This package is available on npm.

Using npm:
```bash
npm i vue-dynamic-filters
```
if you want to use it globale
main.js
```js
import Vue from "vue";
import vueDynamicFilters from "vue-dynamic-filters";

Vue.component("vueDynamicFilters", vueDynamicFilters);
```

## Usage

vue-dynamic-filters can be used in two methods, the first method is to give `vue-dynamic-filters`all the filters like the first example.

### First Method
```js
<template>
  <div>
    <vue-dynamic-filters
      :filters="filters"
      :displayType="false"
      checkboxValue="id"
      selectValue="id"
      v-model="filterValues"
    ></vue-dynamic-filters>
   </div>
 </template>
 <script>
  export default{
    data(){
      return{
        filterValues:{},
        filters:[
            {
              title: "Search",
              filter_type: "text",
              display_type: 1,
            },
            {
              title: "Price",
              filter_type: "price",
              display_type: 1,
              min: "0.000000",
              max: "9000.000000",
            },
            {
              title: "Brand",
              filter_type: "checkbox",
              display_type: 1,
              options: [
                {
                  id: 2,
                  title: "Nokia",
                  products_count: 1,
                },
                {
                  id: 4,
                  title: "Iphone",
                  products_count: 2,
                },
              ],
            },
        ]
      }
    }
  }
 </script>
```

In case you are using the browser version (directly including the script on your page), you can set the defaults with
 
```js
VueScrollTo.setDefaults({
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
```

```html
<a href="#" v-scroll-to="'#element'">Scroll to #element</a>

<div id="element">
    Hi. I'm #element.
</div>
```

If you need to customize the scrolling options, you can pass in an object literal to the directive:

```html
<a href="#" v-scroll-to="{
     el: '#element',
     container: '#container',
     duration: 500,
     easing: 'linear',
     offset: -200,
     force: true,
     cancelable: true,
     onStart: onStart,
     onDone: onDone,
     onCancel: onCancel,
     x: false,
     y: true
 }">
    Scroll to #element
</a>
```

<p class="tip">
    Check out the Options section for more details about the available options.
</p>

### Programmatically

```js
var VueScrollTo = require('vue-scrollto');

var options = {
    container: '#container',
    easing: 'ease-in',
    offset: -60,
    force: true,
    cancelable: true,
    onStart: function(element) {
      // scrolling started
    },
    onDone: function(element) {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    },
    x: false,
    y: true
}

var cancelScroll = VueScrollTo.scrollTo(element, duration, options)

// or alternatively inside your components you can use
cancelScroll = this.$scrollTo(element, duration, options)

// to cancel scrolling you can call the returned function
cancelScroll()
```

## Options

#### el / element 
The element you want to scroll to.

#### container
The container that has to be scrolled. 

*Default:* `body`

#### duration
The duration (in milliseconds) of the scrolling animation. 

*Default:* `500` 

#### easing 
The easing to be used when animating. Read more in the [Easing section](#easing-detailed). 

*Default:* `ease`

#### offset 
The offset that should be applied when scrolling. This option accepts a callback function since `v2.8.0`. 

*Default:* `0`

#### force
Indicates if scrolling should be performed, even if the scroll target is already in view.

*Default:* `true`

#### cancelable
Indicates if user can cancel the scroll or not.

*Default:* `true`

#### onStart
A callback function that should be called when scrolling has started. Receives the target element as a parameter.

*Default:* `noop`

#### onDone 
A callback function that should be called when scrolling has ended. Receives the target element as a parameter.

*Default:* `noop`

#### onCancel 
A callback function that should be called when scrolling has been aborted by the user (user scrolled, clicked etc.). Receives the abort event and the target element as parameters.
 
*Default:* `noop`

#### x 
Whether or not we want scrolling on the `x` axis
 
*Default:* `false`

#### y 
Whether or not we want scrolling on the `y` axis
 
*Default:* `true`


<h2 id="easing-detailed">Easing</h2>

Easing is calculated using [bezier-easing](https://github.com/gre/bezier-easing) so you can pass your own values into `options.easing` in the form of an array with 4 values, or you can use any of the default easings by referencing their names as strings (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`).

vue-scrollto uses the following values for the default easings:
```js
let easings = {
    'ease': [0.25, 0.1, 0.25, 1.0],
    'linear': [0.00, 0.0, 1.00, 1.0],
    'ease-in': [0.42, 0.0, 1.00, 1.0],
    'ease-out': [0.00, 0.0, 0.58, 1.0],
    'ease-in-out': [0.42, 0.0, 0.58, 1.0]
}
```

## Simultaneous Scrolling

If you need to scroll multiple containers simultaneously, you can import the scroller factory directly and create multiple instances. (Using the default `scrollTo` methods allows for only one scroll action at a time for performance reasons.)

```js
import {scroller} from 'vue-scrollto/src/scrollTo'
const firstScrollTo = scroller()
const secondScrollTo = scroller()
firstScrollTo('#el1')
secondScrollTo('#el2')
```

## License

MIT
