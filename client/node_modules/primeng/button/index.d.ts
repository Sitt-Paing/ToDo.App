import { ButtonProps, ButtonSeverity, ButtonPassThrough } from 'primeng/types/button';
export * from 'primeng/types/button';
import * as i0 from '@angular/core';
import { EventEmitter, TemplateRef, QueryList } from '@angular/core';
import * as i3 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Fluid } from 'primeng/fluid';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';
import * as i2 from '@angular/common';

/**
 *
 * Button is an extension to standard button element with icons and theming.
 *
 * [Live Demo](https://www.primeng.org/button/)
 *
 * @module buttonstyle
 *
 */
declare enum ButtonClasses {
    /**
     * Class name of the root element
     */
    root = "p-button",
    /**
     * Class name of the loading icon element
     */
    loadingIcon = "p-button-loading-icon",
    /**
     * Class name of the icon element
     */
    icon = "p-button-icon",
    /**
     * Class name of the label element
     */
    label = "p-button-label"
}
declare class ButtonStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            [x: string]: any;
            'p-button-icon-only': any;
            'p-button-vertical': any;
            'p-button-loading': any;
            'p-button-link': any;
            'p-button-raised': any;
            'p-button-rounded': any;
            'p-button-text': any;
            'p-button-outlined': any;
            'p-button-sm': boolean;
            'p-button-lg': boolean;
            'p-button-plain': any;
            'p-button-fluid': any;
        })[];
        loadingIcon: string;
        icon: ({ instance }: {
            instance: any;
        }) => any[];
        spinnerIcon: ({ instance }: {
            instance: any;
        }) => string;
        label: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ButtonStyle>;
}
interface ButtonStyle extends BaseStyle {
}

type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
declare class ButtonLabel extends BaseComponent {
    ptButtonLabel: i0.InputSignal<any>;
    $pcButtonLabel: ButtonLabel | undefined;
    bindDirectiveInstance: Bind;
    constructor();
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonLabel, "[pButtonLabel]", never, { "ptButtonLabel": { "alias": "ptButtonLabel"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class ButtonIcon extends BaseComponent {
    ptButtonIcon: i0.InputSignal<any>;
    $pcButtonIcon: ButtonIcon | undefined;
    bindDirectiveInstance: Bind;
    constructor();
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonIcon, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonIcon, "[pButtonIcon]", never, { "ptButtonIcon": { "alias": "ptButtonIcon"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
/**
 * Button directive is an extension to button component.
 * @group Components
 */
declare class ButtonDirective extends BaseComponent {
    $pcButtonDirective: ButtonDirective | undefined;
    bindDirectiveInstance: Bind;
    _componentStyle: ButtonStyle;
    ptButtonDirective: i0.InputSignal<any>;
    hostName: any;
    onAfterViewChecked(): void;
    constructor();
    /**
     * Add a textual class to the button without a background initially.
     * @group Props
     */
    text: boolean;
    /**
     * Add a plain textual class to the button without a background initially.
     * @group Props
     */
    plain: boolean;
    /**
     * Add a shadow to indicate elevation.
     * @group Props
     */
    raised: boolean;
    /**
     * Defines the size of the button.
     * @group Props
     */
    size: 'small' | 'large' | undefined;
    /**
     * Add a border class without a background initially.
     * @group Props
     */
    outlined: boolean;
    /**
     * Add a circular border radius to the button.
     * @group Props
     */
    rounded: boolean;
    /**
     * Position of the icon.
     * @group Props
     */
    iconPos: ButtonIconPosition;
    /**
     * Icon to display in loading state.
     * @group Props
     */
    loadingIcon: string | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue undefined
     * @group Props
     */
    fluid: i0.InputSignalWithTransform<boolean | undefined, unknown>;
    private iconSignal;
    private labelSignal;
    isIconOnly: i0.Signal<boolean>;
    _label: string | undefined;
    _icon: string | undefined;
    _loading: boolean;
    private _severity;
    _buttonProps: ButtonProps;
    initialized: boolean | undefined;
    private get htmlElement();
    private _internalClasses;
    pcFluid: Fluid | null;
    isTextButton: i0.Signal<boolean>;
    /**
     * Text of the button.
     * @deprecated use pButtonLabel directive instead.
     * @group Props
     */
    get label(): string | undefined;
    set label(val: string);
    /**
     * Name of the icon.
     * @deprecated use pButtonIcon directive instead
     * @group Props
     */
    get icon(): string;
    set icon(val: string);
    /**
     * Whether the button is in loading state.
     * @group Props
     */
    get loading(): boolean;
    set loading(val: boolean);
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @deprecated assign props directly to the button element.
     * @group Props
     */
    get buttonProps(): ButtonProps;
    set buttonProps(val: ButtonProps);
    /**
     * Defines the style of the button.
     * @group Props
     */
    get severity(): ButtonSeverity;
    set severity(value: ButtonSeverity);
    spinnerIcon: string;
    onAfterViewInit(): void;
    getStyleClass(): string[];
    get hasFluid(): boolean;
    setStyleClass(): void;
    removeExistingSeverityClass(): void;
    createLabel(): void;
    createIcon(): void;
    updateLabel(): void;
    updateIcon(): void;
    getIconClass(): string;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "[pButton]", never, { "ptButtonDirective": { "alias": "ptButtonDirective"; "required": false; "isSignal": true; }; "hostName": { "alias": "hostName"; "required": false; }; "text": { "alias": "text"; "required": false; }; "plain": { "alias": "plain"; "required": false; }; "raised": { "alias": "raised"; "required": false; }; "size": { "alias": "size"; "required": false; }; "outlined": { "alias": "outlined"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "iconPos": { "alias": "iconPos"; "required": false; }; "loadingIcon": { "alias": "loadingIcon"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "buttonProps": { "alias": "buttonProps"; "required": false; }; "severity": { "alias": "severity"; "required": false; }; }, {}, ["iconSignal", "labelSignal"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_text: unknown;
    static ngAcceptInputType_plain: unknown;
    static ngAcceptInputType_raised: unknown;
    static ngAcceptInputType_outlined: unknown;
    static ngAcceptInputType_rounded: unknown;
}
/**
 * Button is an extension to standard button element with icons and theming.
 * @group Components
 */
declare class Button extends BaseComponent<ButtonPassThrough> {
    hostName: any;
    $pcButton: Button | undefined;
    bindDirectiveInstance: Bind;
    _componentStyle: ButtonStyle;
    onAfterViewChecked(): void;
    /**
     * Type of the button.
     * @group Props
     */
    type: string;
    /**
     * Value of the badge.
     * @group Props
     */
    badge: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * Add a shadow to indicate elevation.
     * @group Props
     */
    raised: boolean;
    /**
     * Add a circular border radius to the button.
     * @group Props
     */
    rounded: boolean;
    /**
     * Add a textual class to the button without a background initially.
     * @group Props
     */
    text: boolean;
    /**
     * Add a plain textual class to the button without a background initially.
     * @group Props
     */
    plain: boolean;
    /**
     * Add a border class without a background initially.
     * @group Props
     */
    outlined: boolean;
    /**
     * Add a link style to the button.
     * @group Props
     */
    link: boolean;
    /**
     * Add a tabindex to the button.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Defines the size of the button.
     * @group Props
     */
    size: 'small' | 'large' | undefined;
    /**
     * Specifies the variant of the component.
     * @group Props
     */
    variant: 'outlined' | 'text' | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Style class of the badge.
     * @group Props
     * @deprecated use badgeSeverity instead.
     */
    badgeClass: string | undefined;
    /**
     * Severity type of the badge.
     * @group Props
     * @defaultValue secondary
     */
    badgeSeverity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Position of the icon.
     * @group Props
     */
    iconPos: ButtonIconPosition;
    /**
     * Name of the icon.
     * @group Props
     */
    icon: string | undefined;
    /**
     * Text of the button.
     * @group Props
     */
    label: string | undefined;
    /**
     * Whether the button is in loading state.
     * @group Props
     */
    loading: boolean;
    /**
     * Icon to display in loading state.
     * @group Props
     */
    loadingIcon: string | undefined;
    /**
     * Defines the style of the button.
     * @group Props
     */
    severity: ButtonSeverity;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    buttonProps: ButtonProps;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue undefined
     * @group Props
     */
    fluid: i0.InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Callback to execute when button is clicked.
     * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onClick: EventEmitter<MouseEvent>;
    /**
     * Callback to execute when button is focused.
     * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Callback to execute when button loses focus.
     * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    /**
     * Template of the content.
     * @group Templates
     **/
    contentTemplate: TemplateRef<any> | undefined;
    /**
     * Template of the loading.
     * @group Templates
     **/
    loadingIconTemplate: TemplateRef<any> | undefined;
    /**
     * Template of the icon.
     * @group Templates
     **/
    iconTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    pcFluid: Fluid | null;
    get hasFluid(): boolean;
    _contentTemplate: TemplateRef<any> | undefined;
    _iconTemplate: TemplateRef<any> | undefined;
    _loadingIconTemplate: TemplateRef<any> | undefined;
    onAfterContentInit(): void;
    spinnerIconClass(): string;
    iconClass(): {
        [x: string]: string | boolean | undefined;
        'p-button-icon': boolean;
        'p-button-icon-left': string | false | undefined;
        'p-button-icon-right': string | false | undefined;
        'p-button-icon-top': string | false | undefined;
        'p-button-icon-bottom': string | false | undefined;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<Button, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Button, "p-button", never, { "hostName": { "alias": "hostName"; "required": false; }; "type": { "alias": "type"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "raised": { "alias": "raised"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "text": { "alias": "text"; "required": false; }; "plain": { "alias": "plain"; "required": false; }; "outlined": { "alias": "outlined"; "required": false; }; "link": { "alias": "link"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "badgeClass": { "alias": "badgeClass"; "required": false; }; "badgeSeverity": { "alias": "badgeSeverity"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "iconPos": { "alias": "iconPos"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "label": { "alias": "label"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingIcon": { "alias": "loadingIcon"; "required": false; }; "severity": { "alias": "severity"; "required": false; }; "buttonProps": { "alias": "buttonProps"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; "isSignal": true; }; }, { "onClick": "onClick"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["contentTemplate", "loadingIconTemplate", "iconTemplate", "templates"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_raised: unknown;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_text: unknown;
    static ngAcceptInputType_plain: unknown;
    static ngAcceptInputType_outlined: unknown;
    static ngAcceptInputType_link: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_autofocus: unknown;
    static ngAcceptInputType_loading: unknown;
}
declare class ButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonModule, never, [typeof i2.CommonModule, typeof ButtonDirective, typeof Button, typeof i3.SharedModule, typeof ButtonLabel, typeof ButtonIcon], [typeof ButtonDirective, typeof Button, typeof ButtonLabel, typeof ButtonIcon, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonModule>;
}

export { Button, ButtonClasses, ButtonDirective, ButtonIcon, ButtonLabel, ButtonModule, ButtonStyle };
export type { ButtonIconPosition };
