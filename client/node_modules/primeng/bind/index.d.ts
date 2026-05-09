import * as i0 from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

/**
 * Bind directive provides dynamic attribute, property, and event listener binding functionality.
 * @group Components
 */
declare class Bind {
    private el;
    private renderer;
    /**
     * Dynamic attributes, properties, and event listeners to be applied to the host element.
     * @group Props
     */
    pBind: i0.InputSignal<{
        [key: string]: any;
    } | undefined>;
    private _attrs;
    private attrs;
    private styles;
    private classes;
    private listeners;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnDestroy(): void;
    setAttrs(attrs: {
        [key: string]: any;
    } | undefined): void;
    private clearListeners;
    static ɵfac: i0.ɵɵFactoryDeclaration<Bind, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Bind, "[pBind]", never, { "pBind": { "alias": "pBind"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
declare class BindModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BindModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BindModule, never, [typeof Bind], [typeof Bind]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BindModule>;
}

export { Bind, BindModule };
