# vue-dynamic-filters

[![Vue](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/vue-scrollto.svg)](https://www.npmjs.com/package/vue-dynamic-filters)

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
            },
            {
              title: "Price",
              filter_type: "price",
              min: "0.000000",
              max: "9000.000000",
            },
            {
              title: "Brand",
              filter_type: "checkbox",
              options: [
                {
                  id: 2,
                  title: "Nokia",
                },
                {
                  id: 4,
                  title: "Iphone",
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
  y: true,
});
```

```html
<a href="#" v-scroll-to="'#element'">Scroll to #element</a>

<div id="element">
  Hi. I'm #element.
</div>
```

If you need to customize the scrolling options, you can pass in an object literal to the directive:

```html
<a
  href="#"
  v-scroll-to="{
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
 }"
>
  Scroll to #element
</a>
```

<p class="tip">
    Check out the Options section for more details about the available options.
</p>

### Programmatically

```js
var VueScrollTo = require("vue-scrollto");

var options = {
  container: "#container",
  easing: "ease-in",
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
  y: true,
};

var cancelScroll = VueScrollTo.scrollTo(element, duration, options);

// or alternatively inside your components you can use
cancelScroll = this.$scrollTo(element, duration, options);

// to cancel scrolling you can call the returned function
cancelScroll();
```

## Options

#### el / element

The element you want to scroll to.

#### container

The container that has to be scrolled.

_Default:_ `body`

#### duration

The duration (in milliseconds) of the scrolling animation.

_Default:_ `500`

#### easing

The easing to be used when animating. Read more in the [Easing section](#easing-detailed).

_Default:_ `ease`

#### offset

The offset that should be applied when scrolling. This option accepts a callback function since `v2.8.0`.

_Default:_ `0`

#### force

Indicates if scrolling should be performed, even if the scroll target is already in view.

_Default:_ `true`

#### cancelable

Indicates if user can cancel the scroll or not.

_Default:_ `true`

#### onStart

A callback function that should be called when scrolling has started. Receives the target element as a parameter.

_Default:_ `noop`

#### onDone

A callback function that should be called when scrolling has ended. Receives the target element as a parameter.

_Default:_ `noop`

#### onCancel

A callback function that should be called when scrolling has been aborted by the user (user scrolled, clicked etc.). Receives the abort event and the target element as parameters.

_Default:_ `noop`

#### x

Whether or not we want scrolling on the `x` axis

_Default:_ `false`

#### y

Whether or not we want scrolling on the `y` axis

_Default:_ `true`
