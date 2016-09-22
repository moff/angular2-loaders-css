import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }            from '@angular/common';
import { LoadersCssComponent }    from './loaders-css.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ LoadersCssComponent ],
    exports:      [ LoadersCssComponent ],
    providers:    []
})
export class LoadersCssModule {}
