import * as i0 from '@angular/core';
import { input, signal, computed, effect, Directive, NgModule } from '@angular/core';
import { cn, equals } from '@primeuix/utils';

/**
 * Bind directive provides dynamic attribute, property, and event listener binding functionality.
 * @group Components
 */
class Bind {
    el;
    renderer;
    /**
     * Dynamic attributes, properties, and event listeners to be applied to the host element.
     * @group Props
     */
    pBind = input(undefined, ...(ngDevMode ? [{ debugName: "pBind" }] : []));
    _attrs = signal(undefined, ...(ngDevMode ? [{ debugName: "_attrs" }] : []));
    attrs = computed(() => this._attrs() || this.pBind(), ...(ngDevMode ? [{ debugName: "attrs" }] : []));
    styles = computed(() => this.attrs()?.style, ...(ngDevMode ? [{ debugName: "styles" }] : []));
    classes = computed(() => cn(this.attrs()?.class), ...(ngDevMode ? [{ debugName: "classes" }] : []));
    listeners = [];
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        effect(() => {
            const { style, class: className, ...rest } = this.attrs() || {};
            for (const [key, value] of Object.entries(rest)) {
                if (key.startsWith('on') && typeof value === 'function') {
                    const eventName = key.slice(2).toLowerCase();
                    // add listener if not already added
                    if (!this.listeners.some((l) => l.eventName === eventName)) {
                        const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
                        this.listeners.push({ eventName, unlisten });
                    }
                }
                else if (value === null || value === undefined) {
                    // remove attr
                    this.renderer.removeAttribute(this.el.nativeElement, key);
                }
                else {
                    // attr & prop fallback
                    this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
                    if (key in this.el.nativeElement) {
                        this.el.nativeElement[key] = value;
                    }
                }
            }
        });
    }
    ngOnDestroy() {
        this.clearListeners();
    }
    setAttrs(attrs) {
        if (!equals(this._attrs(), attrs)) {
            this._attrs.set(attrs);
        }
    }
    clearListeners() {
        this.listeners.forEach(({ unlisten }) => unlisten());
        this.listeners = [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Bind, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.3.15", type: Bind, isStandalone: true, selector: "[pBind]", inputs: { pBind: { classPropertyName: "pBind", publicName: "pBind", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style": "styles()", "class": "classes()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Bind, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pBind]',
                    standalone: true,
                    host: {
                        '[style]': 'styles()',
                        '[class]': 'classes()'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { pBind: [{ type: i0.Input, args: [{ isSignal: true, alias: "pBind", required: false }] }] } });
class BindModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: BindModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: BindModule, imports: [Bind], exports: [Bind] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: BindModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: BindModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Bind],
                    exports: [Bind]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Bind, BindModule };
//# sourceMappingURL=primeng-bind.mjs.map
