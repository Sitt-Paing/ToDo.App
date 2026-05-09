import * as i0 from '@angular/core';
import { Injectable, InjectionToken, input, inject, booleanAttribute, computed, effect, HostListener, Input, Directive, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PARENT_INSTANCE } from 'primeng/basecomponent';
import { BaseModelHolder } from 'primeng/basemodelholder';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Fluid } from 'primeng/fluid';
import { style as style$1 } from '@primeuix/styles/inputtext';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${style$1}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;
const classes = {
    root: ({ instance }) => [
        'p-inputtext p-component',
        {
            'p-filled': instance.$filled(),
            'p-inputtext-sm': instance.pSize === 'small',
            'p-inputtext-lg': instance.pSize === 'large',
            'p-invalid': instance.invalid(),
            'p-variant-filled': instance.$variant() === 'filled',
            'p-inputtext-fluid': instance.hasFluid
        }
    ]
};
class InputTextStyle extends BaseStyle {
    name = 'inputtext';
    style = style;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputTextStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputTextStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputTextStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.primeng.org/inputtext/)
 *
 * @module inputtextstyle
 *
 */
var InputTextClasses;
(function (InputTextClasses) {
    /**
     * The class of root element
     */
    InputTextClasses["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));

const INPUTTEXT_INSTANCE = new InjectionToken('INPUTTEXT_INSTANCE');
/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
class InputText extends BaseModelHolder {
    hostName = '';
    ptInputText = input(...(ngDevMode ? [undefined, { debugName: "ptInputText" }] : []));
    bindDirectiveInstance = inject(Bind, { self: true });
    $pcInputText = inject(INPUTTEXT_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    ngControl = inject(NgControl, { optional: true, self: true });
    pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
    /**
     * Defines the size of the component.
     * @group Props
     */
    pSize;
    /**
     * Specifies the input variant of the component.
     * @defaultValue undefined
     * @group Props
     */
    variant = input(...(ngDevMode ? [undefined, { debugName: "variant" }] : []));
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue undefined
     * @group Props
     */
    fluid = input(undefined, ...(ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     * @group Props
     */
    invalid = input(undefined, ...(ngDevMode ? [{ debugName: "invalid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...(ngDevMode ? [{ debugName: "$variant" }] : []));
    _componentStyle = inject(InputTextStyle);
    constructor() {
        super();
        effect(() => {
            this.ptInputText() && this.directivePT.set(this.ptInputText());
        });
    }
    onAfterViewInit() {
        this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
        this.cd.detectChanges();
    }
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm('root'));
    }
    onDoCheck() {
        this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    }
    onInput() {
        this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    }
    get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputText, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.3.15", type: InputText, isStandalone: true, selector: "[pInputText]", inputs: { hostName: { classPropertyName: "hostName", publicName: "hostName", isSignal: false, isRequired: false, transformFunction: null }, ptInputText: { classPropertyName: "ptInputText", publicName: "ptInputText", isSignal: true, isRequired: false, transformFunction: null }, pSize: { classPropertyName: "pSize", publicName: "pSize", isSignal: false, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "input": "onInput($event)" }, properties: { "class": "cx('root')" } }, providers: [InputTextStyle, { provide: INPUTTEXT_INSTANCE, useExisting: InputText }, { provide: PARENT_INSTANCE, useExisting: InputText }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputText, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pInputText]',
                    standalone: true,
                    host: {
                        '[class]': "cx('root')"
                    },
                    providers: [InputTextStyle, { provide: INPUTTEXT_INSTANCE, useExisting: InputText }, { provide: PARENT_INSTANCE, useExisting: InputText }],
                    hostDirectives: [Bind]
                }]
        }], ctorParameters: () => [], propDecorators: { hostName: [{
                type: Input
            }], ptInputText: [{ type: i0.Input, args: [{ isSignal: true, alias: "ptInputText", required: false }] }], pSize: [{
                type: Input,
                args: ['pSize']
            }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], fluid: [{ type: i0.Input, args: [{ isSignal: true, alias: "fluid", required: false }] }], invalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "invalid", required: false }] }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });
class InputTextModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputTextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: InputTextModule, imports: [InputText], exports: [InputText] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputTextModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: InputTextModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [InputText],
                    exports: [InputText]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InputText, InputTextClasses, InputTextModule, InputTextStyle };
//# sourceMappingURL=primeng-inputtext.mjs.map
