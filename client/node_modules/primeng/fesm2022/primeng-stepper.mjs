import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, contentChildren, forwardRef, ViewEncapsulation, ChangeDetectionStrategy, Component, model, computed, contentChild, effect, input, ContentChildren, ContentChild, signal, NgModule } from '@angular/core';
import { trigger, state, transition, style as style$2, animate } from '@angular/animations';
import { find, findIndexInList, uuid } from '@primeuix/utils';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind, BindModule } from 'primeng/bind';
import { transformToBoolean } from 'primeng/utils';
import { BaseStyle } from 'primeng/base';
import { style as style$1 } from '@primeuix/styles/stepper';

const classes$5 = {
    root: ({ instance }) => [
        'p-stepitem',
        {
            'p-stepitem-active': instance.isActive()
        }
    ]
};
class StepItemStyle extends BaseStyle {
    name = 'stepitem';
    classes = classes$5;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepItemStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepItemStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepItemStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepitemstyle
 *
 */
var StepItemClasses;
(function (StepItemClasses) {
    /**
     * Class name of the root element
     */
    StepItemClasses["root"] = "p-stepitem";
})(StepItemClasses || (StepItemClasses = {}));

const classes$4 = {
    root: 'p-steplist'
};
class StepListStyle extends BaseStyle {
    name = 'steplist';
    classes = classes$4;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepListStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepListStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepListStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepliststyle
 *
 */
var StepListClasses;
(function (StepListClasses) {
    /**
     * Class name of the root element
     */
    StepListClasses["root"] = "p-stepitem";
})(StepListClasses || (StepListClasses = {}));

const classes$3 = {
    root: 'p-steppanels'
};
class StepPanelsStyle extends BaseStyle {
    name = 'steppanel';
    classes = classes$3;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanelsStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanelsStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanelsStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * StepPanel is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module steppanelsstyle
 *
 */
var StepPanelsClasses;
(function (StepPanelsClasses) {
    /**
     * Class name of the root element
     */
    StepPanelsClasses["root"] = "p-steppanels";
})(StepPanelsClasses || (StepPanelsClasses = {}));

const classes$2 = {
    root: ({ instance }) => [
        'p-steppanel',
        {
            'p-steppanel-active': instance.isVertical() && instance.active()
        }
    ],
    content: 'p-steppanel-content'
};
class StepPanelStyle extends BaseStyle {
    name = 'steppanel';
    classes = classes$2;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanelStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanelStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanelStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * StepPanel is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module steppanelstyle
 *
 */
var StepPanelClasses;
(function (StepPanelClasses) {
    /**
     * Class name of the root element
     */
    StepPanelClasses["root"] = "p-steppanel";
})(StepPanelClasses || (StepPanelClasses = {}));

const style = /*css*/ `
    ${style$1}

    /* For PrimeNG */
    .p-steppanel:not(.p-steppanel-active) > .p-steppanel-content,
    .p-steppanel-content.ng-animating {
        overflow: hidden;
    }
`;
const classes$1 = {
    root: ({ instance }) => [
        'p-stepper p-component',
        {
            'p-readonly': instance.linear()
        }
    ],
    separator: 'p-stepper-separator'
};
class StepperStyle extends BaseStyle {
    name = 'stepper';
    style = style;
    classes = classes$1;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepperstyle
 *
 */
var StepperClasses;
(function (StepperClasses) {
    /**
     * Class name of the root element
     */
    StepperClasses["root"] = "p-stepper";
    /**
     * Class name of the separator element
     */
    StepperClasses["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));

const classes = {
    root: ({ instance }) => [
        'p-step',
        {
            'p-step-active': instance.active(),
            'p-disabled': instance.isStepDisabled()
        }
    ],
    header: 'p-step-header',
    number: 'p-step-number',
    title: 'p-step-title'
};
class StepStyle extends BaseStyle {
    name = 'step';
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepstyle
 *
 */
var StepClasses;
(function (StepClasses) {
    /**
     * Class name of the root element
     */
    StepClasses["root"] = "p-step";
    /**
     * Class name of the header element
     */
    StepClasses["header"] = "p-step-header";
    /**
     * Class name of the number element
     */
    StepClasses["number"] = "p-step-number";
    /**
     * Class name of the title element
     */
    StepClasses["title"] = "p-step-title";
})(StepClasses || (StepClasses = {}));

const STEPPER_INSTANCE = new InjectionToken('STEPPER_INSTANCE');
const STEPLIST_INSTANCE = new InjectionToken('STEPLIST_INSTANCE');
const STEPITEM_INSTANCE = new InjectionToken('STEPITEM_INSTANCE');
const STEP_INSTANCE = new InjectionToken('STEP_INSTANCE');
const STEPPANEL_INSTANCE = new InjectionToken('STEPPANEL_INSTANCE');
const STEPPANELS_INSTANCE = new InjectionToken('STEPPANELS_INSTANCE');
const STEPPERSEPARATOR_INSTANCE = new InjectionToken('STEPPERSEPARATOR_INSTANCE');
class StepList extends BaseComponent {
    $pcStepList = inject(STEPLIST_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    steps = contentChildren(forwardRef(() => Step), ...(ngDevMode ? [{ debugName: "steps" }] : []));
    _componentStyle = inject(StepListStyle);
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepList, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.3.15", type: StepList, isStandalone: true, selector: "p-step-list", host: { properties: { "class": "cx(\"root\")" } }, providers: [StepListStyle, { provide: STEPLIST_INSTANCE, useExisting: StepList }, { provide: PARENT_INSTANCE, useExisting: StepList }], queries: [{ propertyName: "steps", predicate: i0.forwardRef(() => Step), isSignal: true }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: BindModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepList, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-list',
                    standalone: true,
                    imports: [CommonModule, BindModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': 'cx("root")'
                    },
                    providers: [StepListStyle, { provide: STEPLIST_INSTANCE, useExisting: StepList }, { provide: PARENT_INSTANCE, useExisting: StepList }],
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { steps: [{ type: i0.ContentChildren, args: [forwardRef(() => Step), { isSignal: true }] }] } });
/**
 * StepperSeparator is a helper component for Stepper component used in vertical orientation.
 * @group Components
 */
class StepperSeparator extends BaseComponent {
    $pcStepperSeparator = inject(STEPPERSEPARATOR_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    _componentStyle = inject(StepperStyle);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperSeparator, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.15", type: StepperSeparator, isStandalone: true, selector: "p-stepper-separator", host: { properties: { "class": "cx(\"separator\")" } }, providers: [StepperStyle, { provide: STEPPERSEPARATOR_INSTANCE, useExisting: StepperSeparator }, { provide: PARENT_INSTANCE, useExisting: StepperSeparator }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: BindModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperSeparator, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper-separator',
                    standalone: true,
                    imports: [CommonModule, BindModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': 'cx("separator")'
                    },
                    providers: [StepperStyle, { provide: STEPPERSEPARATOR_INSTANCE, useExisting: StepperSeparator }, { provide: PARENT_INSTANCE, useExisting: StepperSeparator }],
                    hostDirectives: [Bind]
                }]
        }] });
/**
 * StepItem is a helper component for Stepper component used in vertical orientation.
 * @group Components
 */
class StepItem extends BaseComponent {
    $pcStepItem = inject(STEPITEM_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    _componentStyle = inject(StepItemStyle);
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    pcStepper = inject(forwardRef(() => Stepper));
    /**
     * Value of step.
     * @type {<number | undefined>}
     * @defaultValue undefined
     * @group Props
     */
    value = model(...(ngDevMode ? [undefined, { debugName: "value" }] : []));
    isActive = computed(() => this.pcStepper.value() === this.value(), ...(ngDevMode ? [{ debugName: "isActive" }] : []));
    step = contentChild(forwardRef(() => Step), ...(ngDevMode ? [{ debugName: "step" }] : []));
    stepPanel = contentChild(forwardRef(() => StepPanel), ...(ngDevMode ? [{ debugName: "stepPanel" }] : []));
    constructor() {
        super();
        effect(() => {
            this.step().value.set(this.value());
        });
        effect(() => {
            this.stepPanel().value.set(this.value());
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepItem, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.3.15", type: StepItem, isStandalone: true, selector: "p-step-item", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class": "cx(\"root\")", "attr.data-p-active": "isActive()" } }, providers: [StepItemStyle, { provide: STEPITEM_INSTANCE, useExisting: StepItem }, { provide: PARENT_INSTANCE, useExisting: StepItem }], queries: [{ propertyName: "step", first: true, predicate: i0.forwardRef(() => Step), descendants: true, isSignal: true }, { propertyName: "stepPanel", first: true, predicate: i0.forwardRef(() => StepPanel), descendants: true, isSignal: true }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: BindModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-item',
                    standalone: true,
                    imports: [CommonModule, BindModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': 'cx("root")',
                        '[attr.data-p-active]': 'isActive()'
                    },
                    providers: [StepItemStyle, { provide: STEPITEM_INSTANCE, useExisting: StepItem }, { provide: PARENT_INSTANCE, useExisting: StepItem }],
                    hostDirectives: [Bind]
                }]
        }], ctorParameters: () => [], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], step: [{ type: i0.ContentChild, args: [forwardRef(() => Step), { isSignal: true }] }], stepPanel: [{ type: i0.ContentChild, args: [forwardRef(() => StepPanel), { isSignal: true }] }] } });
/**
 * Step is a helper component for Stepper component.
 * @group Components
 */
class Step extends BaseComponent {
    $pcStep = inject(STEP_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    pcStepper = inject(forwardRef(() => Stepper));
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value = model(...(ngDevMode ? [undefined, { debugName: "value" }] : []));
    /**
     * Whether the step is disabled.
     * @type {boolean}
     * @defaultValue false
     * @group Props
     */
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled", transform: (v) => transformToBoolean(v) }] : [{
            transform: (v) => transformToBoolean(v)
        }]));
    active = computed(() => this.pcStepper.isStepActive(this.value()), ...(ngDevMode ? [{ debugName: "active" }] : []));
    isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...(ngDevMode ? [{ debugName: "isStepDisabled" }] : []));
    id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...(ngDevMode ? [{ debugName: "id" }] : []));
    ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...(ngDevMode ? [{ debugName: "ariaControls" }] : []));
    isSeparatorVisible = computed(() => {
        if (this.pcStepper.stepList()) {
            const steps = this.pcStepper.stepList().steps();
            const index = steps.indexOf(this);
            const stepLen = steps.length;
            return index !== stepLen - 1;
        }
        else {
            return false;
        }
    }, ...(ngDevMode ? [{ debugName: "isSeparatorVisible" }] : []));
    /**
     * Content template.
     * @type {TemplateRef<StepContentTemplateContext>}
     * @group Templates
     */
    content;
    templates;
    _contentTemplate;
    _componentStyle = inject(StepStyle);
    onAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this._contentTemplate = item.template;
                    break;
            }
        });
    }
    onStepClick() {
        this.pcStepper.updateValue(this.value());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Step, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: Step, isStandalone: true, selector: "p-step", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class": "cx(\"root\")", "attr.aria-current": "active() ? \"step\" : undefined", "attr.role": "\"presentation\"", "attr.data-p-active": "active()", "attr.data-p-disabled": "isStepDisabled()" } }, providers: [StepStyle, { provide: STEP_INSTANCE, useExisting: Step }, { provide: PARENT_INSTANCE, useExisting: Step }], queries: [{ propertyName: "content", first: true, predicate: ["content"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        @if (!content && !_contentTemplate) {
            <button
                [attr.id]="id()"
                [class]="cx('header')"
                [pBind]="ptm('header')"
                [attr.role]="'tab'"
                [tabindex]="isStepDisabled() ? -1 : undefined"
                [attr.aria-controls]="ariaControls()"
                [disabled]="isStepDisabled()"
                (click)="onStepClick()"
                type="button"
            >
                <span [class]="cx('number')" [pBind]="ptm('number')">{{ value() }}</span>
                <span [class]="cx('title')" [pBind]="ptm('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StepperSeparator, selector: "p-stepper-separator" }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }, { kind: "directive", type: i1.Bind, selector: "[pBind]", inputs: ["pBind"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Step, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step',
                    standalone: true,
                    imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
                    template: `
        @if (!content && !_contentTemplate) {
            <button
                [attr.id]="id()"
                [class]="cx('header')"
                [pBind]="ptm('header')"
                [attr.role]="'tab'"
                [tabindex]="isStepDisabled() ? -1 : undefined"
                [attr.aria-controls]="ariaControls()"
                [disabled]="isStepDisabled()"
                (click)="onStepClick()"
                type="button"
            >
                <span [class]="cx('number')" [pBind]="ptm('number')">{{ value() }}</span>
                <span [class]="cx('title')" [pBind]="ptm('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': 'cx("root")',
                        '[attr.aria-current]': 'active() ? "step" : undefined',
                        '[attr.role]': '"presentation"',
                        '[attr.data-p-active]': 'active()',
                        '[attr.data-p-disabled]': 'isStepDisabled()'
                    },
                    providers: [StepStyle, { provide: STEP_INSTANCE, useExisting: Step }, { provide: PARENT_INSTANCE, useExisting: Step }],
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], content: [{
                type: ContentChild,
                args: ['content', { descendants: false }]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
/**
 * StepPanel is a helper component for Stepper component.
 * @group Components
 */
class StepPanel extends BaseComponent {
    $pcStepPanel = inject(STEPPANEL_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    pcStepper = inject(forwardRef(() => Stepper));
    transitionOptions = computed(() => this.pcStepper.transitionOptions(), ...(ngDevMode ? [{ debugName: "transitionOptions" }] : []));
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value = model(undefined, ...(ngDevMode ? [{ debugName: "value" }] : []));
    active = computed(() => this.pcStepper.value() === this.value(), ...(ngDevMode ? [{ debugName: "active" }] : []));
    visible = signal(this.active(), ...(ngDevMode ? [{ debugName: "visible" }] : []));
    isVisible = computed(() => this.active() || (this.isVertical() && this.visible()), ...(ngDevMode ? [{ debugName: "isVisible" }] : []));
    ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...(ngDevMode ? [{ debugName: "ariaControls" }] : []));
    id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...(ngDevMode ? [{ debugName: "id" }] : []));
    isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...(ngDevMode ? [{ debugName: "isVertical" }] : []));
    isSeparatorVisible = computed(() => {
        if (this.pcStepper.stepItems()) {
            const stepLen = this.pcStepper.stepItems().length;
            const stepPanelElements = find(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
            const index = findIndexInList(this.el.nativeElement, stepPanelElements);
            return index !== stepLen - 1;
        }
    }, ...(ngDevMode ? [{ debugName: "isSeparatorVisible" }] : []));
    /**
     * Content template.
     * @param {StepPanelContentTemplateContext} context - Context of the template
     * @see {@link StepPanelContentTemplateContext}
     * @group Templates
     */
    contentTemplate;
    templates;
    _contentTemplate;
    _componentStyle = inject(StepPanelStyle);
    onAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this._contentTemplate = item.template;
                    break;
            }
        });
    }
    onAnimationStart(event) {
        if (event.toState === 'visible') {
            this.visible.set(true);
        }
    }
    onAnimationEnd(event) {
        if (event.toState === 'hidden') {
            this.visible.set(false);
        }
    }
    updateValue(value) {
        this.pcStepper.updateValue(value);
    }
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanel, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: StepPanel, isStandalone: true, selector: "p-step-panel", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class": "cx(\"root\")", "attr.role": "\"tabpanel\"", "attr.aria-controls": "ariaControls()", "attr.id": "id()", "attr.data-p-active": "active()", "attr.data-pc-name": "\"steppanel\"" } }, providers: [StepPanelStyle, { provide: STEPPANEL_INSTANCE, useExisting: StepPanel }, { provide: PARENT_INSTANCE, useExisting: StepPanel }], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        @if (isSeparatorVisible()) {
            <p-stepper-separator />
        }
        <div
            [pBind]="ptm('content')"
            [class]="cx('content')"
            [@content]="isVertical() ? (active() ? { value: 'visible', params: { transitionParams: transitionOptions() } } : { value: 'hidden', params: { transitionParams: transitionOptions() } }) : undefined"
            (@content.start)="onAnimationStart($event)"
            (@content.done)="onAnimationEnd($event)"
        >
            @if (isVisible()) {
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
            }
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StepperSeparator, selector: "p-stepper-separator" }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }, { kind: "directive", type: i1.Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [
            trigger('content', [
                state('hidden', style$2({
                    height: '0'
                })),
                state('visible', style$2({
                    height: '*'
                })),
                transition('visible <=> hidden', [animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                transition('void => *', animate(0))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-panel',
                    standalone: true,
                    imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
                    template: `
        @if (isSeparatorVisible()) {
            <p-stepper-separator />
        }
        <div
            [pBind]="ptm('content')"
            [class]="cx('content')"
            [@content]="isVertical() ? (active() ? { value: 'visible', params: { transitionParams: transitionOptions() } } : { value: 'hidden', params: { transitionParams: transitionOptions() } }) : undefined"
            (@content.start)="onAnimationStart($event)"
            (@content.done)="onAnimationEnd($event)"
        >
            @if (isVisible()) {
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
            }
        </div>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': 'cx("root")',
                        '[attr.role]': '"tabpanel"',
                        '[attr.aria-controls]': 'ariaControls()',
                        '[attr.id]': 'id()',
                        '[attr.data-p-active]': 'active()',
                        '[attr.data-pc-name]': '"steppanel"'
                    },
                    animations: [
                        trigger('content', [
                            state('hidden', style$2({
                                height: '0'
                            })),
                            state('visible', style$2({
                                height: '*'
                            })),
                            transition('visible <=> hidden', [animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                            transition('void => *', animate(0))
                        ])
                    ],
                    providers: [StepPanelStyle, { provide: STEPPANEL_INSTANCE, useExisting: StepPanel }, { provide: PARENT_INSTANCE, useExisting: StepPanel }],
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], contentTemplate: [{
                type: ContentChild,
                args: ['content']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class StepPanels extends BaseComponent {
    $pcStepPanels = inject(STEPPANELS_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    _componentStyle = inject(StepPanelsStyle);
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanels, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.15", type: StepPanels, isStandalone: true, selector: "p-step-panels", host: { properties: { "class": "cx(\"root\")" } }, providers: [StepPanelsStyle, { provide: STEPPANELS_INSTANCE, useExisting: StepPanels }, { provide: PARENT_INSTANCE, useExisting: StepPanels }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepPanels, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-panels',
                    standalone: true,
                    imports: [CommonModule, SharedModule, BindModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': 'cx("root")'
                    },
                    providers: [StepPanelsStyle, { provide: STEPPANELS_INSTANCE, useExisting: StepPanels }, { provide: PARENT_INSTANCE, useExisting: StepPanels }],
                    hostDirectives: [Bind]
                }]
        }] });
/**
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multistep process.
 * @group Components
 */
class Stepper extends BaseComponent {
    $pcStepper = inject(STEPPER_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    _componentStyle = inject(StepperStyle);
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    /**
     * A model that can hold a numeric value or be undefined.
     * @defaultValue undefined
     * @type {ModelSignal<number | undefined>}
     * @group Props
     */
    value = model(undefined, ...(ngDevMode ? [{ debugName: "value" }] : []));
    /**
     * A boolean variable that captures user input.
     * @defaultValue false
     * @type {InputSignalWithTransform<any, boolean >}
     * @group Props
     */
    linear = input(false, ...(ngDevMode ? [{ debugName: "linear", transform: (v) => transformToBoolean(v) }] : [{
            transform: (v) => transformToBoolean(v)
        }]));
    /**
     * Transition options of the animation.
     * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
     * @type {InputSignal<string >}
     * @group Props
     */
    transitionOptions = input('400ms cubic-bezier(0.86, 0, 0.07, 1)', ...(ngDevMode ? [{ debugName: "transitionOptions" }] : []));
    id = signal(uuid('pn_id_'), ...(ngDevMode ? [{ debugName: "id" }] : []));
    stepItems = contentChildren(StepItem, ...(ngDevMode ? [{ debugName: "stepItems" }] : []));
    steps = contentChildren(Step, ...(ngDevMode ? [{ debugName: "steps" }] : []));
    stepList = contentChild(StepList, ...(ngDevMode ? [{ debugName: "stepList" }] : []));
    updateValue(value) {
        this.value.set(value);
    }
    isStepActive(value) {
        return this.value() === value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Stepper, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.3.15", type: Stepper, isStandalone: true, selector: "p-stepper", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, linear: { classPropertyName: "linear", publicName: "linear", isSignal: true, isRequired: false, transformFunction: null }, transitionOptions: { classPropertyName: "transitionOptions", publicName: "transitionOptions", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class": "cx(\"root\")", "attr.role": "\"tablist\"", "attr.id": "id()" } }, providers: [StepperStyle, { provide: STEPPER_INSTANCE, useExisting: Stepper }, { provide: PARENT_INSTANCE, useExisting: Stepper }], queries: [{ propertyName: "stepItems", predicate: StepItem, isSignal: true }, { propertyName: "steps", predicate: Step, isSignal: true }, { propertyName: "stepList", first: true, predicate: StepList, descendants: true, isSignal: true }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Stepper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper',
                    standalone: true,
                    imports: [CommonModule, SharedModule, BindModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [StepperStyle, { provide: STEPPER_INSTANCE, useExisting: Stepper }, { provide: PARENT_INSTANCE, useExisting: Stepper }],
                    host: {
                        '[class]': 'cx("root")',
                        '[attr.role]': '"tablist"',
                        '[attr.id]': 'id()'
                    },
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], linear: [{ type: i0.Input, args: [{ isSignal: true, alias: "linear", required: false }] }], transitionOptions: [{ type: i0.Input, args: [{ isSignal: true, alias: "transitionOptions", required: false }] }], stepItems: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => StepItem), { isSignal: true }] }], steps: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => Step), { isSignal: true }] }], stepList: [{ type: i0.ContentChild, args: [i0.forwardRef(() => StepList), { isSignal: true }] }] } });
class StepperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: StepperModule, imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule], exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperModule, imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule, SharedModule, BindModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: StepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
                    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Step, StepItem, StepList, StepPanel, StepPanels, Stepper, StepperClasses, StepperModule, StepperSeparator, StepperStyle };
//# sourceMappingURL=primeng-stepper.mjs.map
