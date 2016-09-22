# Angular 2 Loaders.css spinners

![alt tag](http://i.imgur.com/6TCsrFV.png)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This repository contains Angular 2 module that implements Loaders.css spinners.

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

- import `LoadersCssModule` in your app's main module `app.module.ts`, e.g.:

```
// other imports
// ...
import { LoadersCssModule } from 'angular2-loaders-css';
// ...

@NgModule({
    imports: [
        // other imports
        // ...
        LoadersCssModule,
        // ...
    ]
})
```

That should be enough if you use Webpack to bundle JavaScript.

Otherwise you'll have to edit `systemjs.config.js` to set correct path, e.g.:

```
// below you can see an example of map and packages sections in systemjs.config.js

// ...
// map tells the System loader where to look for things
var map = {
    // ...
    'angular2-loaders-css':       'node_modules/angular2-loaders-css',
    // ...
};
// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    // ...
    'angular2-loaders-css':       { main: 'index.js', defaultExtension: 'js' },
    // ...
};

// ...
```

## Usage

Import `LoadersCssComponent` and use it as a directive, e.g.:

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

Important! If you don't see spinner and there are no errors in console - it can be because spinner's color is the same as the background's color - usually it's white.

You can pass `loaderClass`-attribute and specify CSS class for a loader if you want to change loader's color, e.g.:

```
.my-loader {
    background-color: #D32F2F;
}
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


## Feedback

Please [leave your feedback](https://github.com/moff/angular2-loaders-css/issues) if you have noticed any issues or have a feature request.


## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
