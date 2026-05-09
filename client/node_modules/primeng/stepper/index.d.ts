import * as i0 from '@angular/core';
import { ModelSignal, InputSignalWithTransform, TemplateRef, QueryList, InputSignal } from '@angular/core';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { StepListPassThrough, StepperSeparatorPassThrough, StepItemPassThrough, StepPassThrough, StepPanelPassThrough, StepPanelsPassThrough, StepperPassThrough } from 'primeng/types/stepper';
import { BaseStyle } from 'primeng/base';

declare class StepItemStyle extends BaseStyle {
    name: string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-stepitem-active': any;
        })[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StepItemStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepItemStyle>;
}
interface StepItemStyle extends BaseStyle {
}

declare class StepListStyle extends BaseStyle {
    name: string;
    classes: {
        root: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StepListStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepListStyle>;
}
interface StepListStyle extends BaseStyle {
}

declare class StepPanelsStyle extends BaseStyle {
    name: string;
    classes: {
        root: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StepPanelsStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepPanelsStyle>;
}
interface StepPanelsStyle extends BaseStyle {
}

declare class StepPanelStyle extends BaseStyle {
    name: string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-steppanel-active': any;
        })[];
        content: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StepPanelStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepPanelStyle>;
}
interface StepPanelStyle extends BaseStyle {
}

/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepperstyle
 *
 */
declare enum StepperClasses {
    /**
     * Class name of the root element
     */
    root = "p-stepper",
    /**
     * Class name of the separator element
     */
    separator = "p-stepper-separator"
}
declare class StepperStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-readonly': any;
        })[];
        separator: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepperStyle>;
}
interface StepperStyle extends BaseStyle {
}

declare class StepStyle extends BaseStyle {
    name: string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-step-active': any;
            'p-disabled': any;
        })[];
        header: string;
        number: string;
        title: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StepStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepStyle>;
}
interface StepStyle extends BaseStyle {
}

/**
 * Context interface for the StepPanel content template.
 * @property {() => void} activateCallback - Callback function to activate a step.
 * @property {number} value - The value associated with the step.
 * @property {boolean} active - A flag indicating whether the step is active.
 * @group Interface
 */
interface StepContentTemplateContext {
    activateCallback: () => void;
    value: number;
    active: boolean;
}
/**
 * Context interface for the StepPanel content template.
 * @property {(index: number) => void} activateCallback - Callback function to activate a step.
 * @property {number} value - The value associated with the step.
 * @property {boolean} active - A flag indicating whether the step is active.
 * @group Interface
 */
interface StepPanelContentTemplateContext {
    activateCallback: (index: number) => void;
    value: number;
    active: boolean;
}
declare class StepList extends BaseComponent<StepListPassThrough> {
    $pcStepList: StepList | undefined;
    bindDirectiveInstance: Bind;
    steps: i0.Signal<readonly any[]>;
    _componentStyle: StepListStyle;
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepList, "p-step-list", never, {}, {}, ["steps"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
/**
 * StepperSeparator is a helper component for Stepper component used in vertical orientation.
 * @group Components
 */
declare class StepperSeparator extends BaseComponent<StepperSeparatorPassThrough> {
    $pcStepperSeparator: StepperSeparator | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    _componentStyle: StepperStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperSeparator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperSeparator, "p-stepper-separator", never, {}, {}, never, ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
/**
 * StepItem is a helper component for Stepper component used in vertical orientation.
 * @group Components
 */
declare class StepItem extends BaseComponent<StepItemPassThrough> {
    $pcStepItem: StepItem | undefined;
    bindDirectiveInstance: Bind;
    _componentStyle: StepItemStyle;
    onAfterViewChecked(): void;
    pcStepper: any;
    /**
     * Value of step.
     * @type {<number | undefined>}
     * @defaultValue undefined
     * @group Props
     */
    value: ModelSignal<number | undefined>;
    isActive: i0.Signal<boolean>;
    step: i0.Signal<any>;
    stepPanel: i0.Signal<any>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StepItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepItem, "p-step-item", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["step", "stepPanel"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
/**
 * Step is a helper component for Stepper component.
 * @group Components
 */
declare class Step extends BaseComponent<StepPassThrough> {
    $pcStep: Step | undefined;
    bindDirectiveInstance: Bind;
    pcStepper: any;
    onAfterViewChecked(): void;
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value: ModelSignal<number | undefined>;
    /**
     * Whether the step is disabled.
     * @type {boolean}
     * @defaultValue false
     * @group Props
     */
    disabled: InputSignalWithTransform<any, boolean>;
    active: i0.Signal<any>;
    isStepDisabled: i0.Signal<any>;
    id: i0.Signal<string>;
    ariaControls: i0.Signal<string>;
    isSeparatorVisible: i0.Signal<boolean>;
    /**
     * Content template.
     * @type {TemplateRef<StepContentTemplateContext>}
     * @group Templates
     */
    content: TemplateRef<StepContentTemplateContext>;
    templates: QueryList<PrimeTemplate> | undefined;
    _contentTemplate: TemplateRef<any> | undefined;
    _componentStyle: StepStyle;
    onAfterContentInit(): void;
    onStepClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Step, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Step, "p-step", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["content", "templates"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
/**
 * StepPanel is a helper component for Stepper component.
 * @group Components
 */
declare class StepPanel extends BaseComponent<StepPanelPassThrough> {
    $pcStepPanel: StepPanel | undefined;
    bindDirectiveInstance: Bind;
    pcStepper: any;
    transitionOptions: i0.Signal<any>;
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value: ModelSignal<number | undefined>;
    active: i0.Signal<boolean>;
    visible: i0.WritableSignal<boolean>;
    isVisible: i0.Signal<boolean>;
    ariaControls: i0.Signal<string>;
    id: i0.Signal<string>;
    isVertical: i0.Signal<boolean>;
    isSeparatorVisible: i0.Signal<boolean | undefined>;
    /**
     * Content template.
     * @param {StepPanelContentTemplateContext} context - Context of the template
     * @see {@link StepPanelContentTemplateContext}
     * @group Templates
     */
    contentTemplate: TemplateRef<StepPanelContentTemplateContext>;
    templates: QueryList<PrimeTemplate> | undefined;
    _contentTemplate: TemplateRef<any> | undefined;
    _componentStyle: StepPanelStyle;
    onAfterContentInit(): void;
    onAnimationStart(event: any): void;
    onAnimationEnd(event: any): void;
    updateValue(value: number): void;
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepPanel, "p-step-panel", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["contentTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class StepPanels extends BaseComponent<StepPanelsPassThrough> {
    $pcStepPanels: StepPanels | undefined;
    bindDirectiveInstance: Bind;
    _componentStyle: StepPanelsStyle;
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepPanels, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepPanels, "p-step-panels", never, {}, {}, never, ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
/**
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multistep process.
 * @group Components
 */
declare class Stepper extends BaseComponent<StepperPassThrough> {
    $pcStepper: Stepper | undefined;
    bindDirectiveInstance: Bind;
    _componentStyle: StepperStyle;
    onAfterViewChecked(): void;
    /**
     * A model that can hold a numeric value or be undefined.
     * @defaultValue undefined
     * @type {ModelSignal<number | undefined>}
     * @group Props
     */
    value: ModelSignal<number | undefined>;
    /**
     * A boolean variable that captures user input.
     * @defaultValue false
     * @type {InputSignalWithTransform<any, boolean >}
     * @group Props
     */
    linear: InputSignalWithTransform<any, boolean>;
    /**
     * Transition options of the animation.
     * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
     * @type {InputSignal<string >}
     * @group Props
     */
    transitionOptions: InputSignal<string>;
    id: i0.WritableSignal<string>;
    stepItems: i0.Signal<readonly StepItem[]>;
    steps: i0.Signal<readonly Step[]>;
    stepList: i0.Signal<StepList | undefined>;
    updateValue(value: number): void;
    isStepActive(value: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Stepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Stepper, "p-stepper", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "linear": { "alias": "linear"; "required": false; "isSignal": true; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["stepItems", "steps", "stepList"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class StepperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<StepperModule, never, [typeof Stepper, typeof StepList, typeof StepPanels, typeof StepPanel, typeof StepItem, typeof Step, typeof StepperSeparator, typeof i2.SharedModule, typeof i1.BindModule], [typeof Stepper, typeof StepList, typeof StepPanels, typeof StepPanel, typeof StepItem, typeof Step, typeof StepperSeparator, typeof i2.SharedModule, typeof i1.BindModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<StepperModule>;
}

export { Step, StepItem, StepList, StepPanel, StepPanels, Stepper, StepperClasses, StepperModule, StepperSeparator, StepperStyle };
export type { StepContentTemplateContext, StepPanelContentTemplateContext };
