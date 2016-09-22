import { Component } from '@angular/core';

@Component({
    template: `
        <p>Home Component</p>
        <loaders-css [loader]="'square-spin'" [loaderClass]="'my-loader'"></loaders-css>
    `
})
export class HomeComponent {}
