# Angular 2 Loaders.css spinners

![alt tag](http://i.imgur.com/6TCsrFV.png)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This repository contains Angular 2 component that implements Loaders.css spinners.

<a href="https://connoratherton.com/loaders" target_='blank'>Check out the demo of Loaders.css</a>


## Requirements
- [NPM](https://npmjs.org/) - Node package manager


## Installation

- run `npm install angular2-loaders-css --save`
- link [Loaders.css](https://github.com/ConnorAtherton/loaders.css) stylesheet to your document - you can find it in /node_modules/loaders.css/, e.g. add this in your html-document:

```
<link rel="stylesheet" href="node_modules/loaders.css/loaders.min.css">
```
or import it in app.scss, e.g.:
```
@import "node_modules/loaders.css/src/loaders";
```


## Usage

Import `LoadersCssComponent` component and use it as a directive, e.g.: 

```
import { Component } from '@angular/core';
import { LoadersCssComponent } from 'angular2-loaders-css';

@Component({
    template: `
        <h2>Home component header</h2>
        <loaders-css [loader]="'square-spin'" [loaderClass]="'my-loader'"></loaders-css>
    `,
    directives: [LoadersCssComponent]
})
export class HomeComponent {}
```

Note that you have to use loader-attribute to choose a loader that'll be displayed, possible values are:

- ball-pulse
- ball-grid-pulse
- ball-clip-rotate
- ball-clip-rotate-pulse
- square-spin
- ball-clip-rotate-multiple
- ball-pulse-rise
- ball-rotate
- cube-transition
- ball-zig-zag
- ball-zig-zag-deflect
- ball-triangle-path
- ball-scale
- line-scale
- line-scale-party
- ball-scale-multiple
- ball-pulse-sync
- ball-beat
- line-scale-pulse-out
- line-scale-pulse-out-rapid
- ball-scale-ripple
- ball-scale-ripple-multiple
- ball-spin-fade-loader
- line-spin-fade-loader
- triangle-skew-spin
- pacman
- ball-grid-beat
- semi-circle-spin

Also you can pass loaderClass-attribute and specify CSS class for a loader if you want to change loader's color, e.g.:

```
.my-loader {
    background-color: #D32F2F;
}
```


## Feedback

Please [leave your feedback](https://github.com/moff/angular2-loaders-css/issues) if you have noticed any issues or have a feature request.


## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
