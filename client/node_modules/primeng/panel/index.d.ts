import { PanelPassThrough, PanelBeforeToggleEvent, PanelAfterToggleEvent, PanelHeaderIconsTemplateContext } from 'primeng/types/panel';
export * from 'primeng/types/panel';
import * as i0 from '@angular/core';
import { EventEmitter, TemplateRef, ElementRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Nullable } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

declare class PanelStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-panel-toggleable': any;
            'p-panel-expanded': any;
            'p-panel-collapsed': any;
        })[];
        header: string;
        title: string;
        headerActions: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-panel-icons-start': boolean;
            'p-panel-icons-end': boolean;
            'p-panel-icons-center': boolean;
        })[];
        pcToggleButton: string;
        contentContainer: string;
        content: string;
        footer: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PanelStyle>;
}
/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primeng.org/panel/)
 *
 * @module panelstyle
 *
 */
declare enum PanelClasses {
    /**
     * Class name of the root element
     */
    root = "p-panel",
    /**
     * Class name of the header element
     */
    header = "p-panel-header",
    /**
     * Class name of the title element
     */
    title = "p-panel-title",
    /**
     * Class name of the header actions element
     */
    headerActions = "p-panel-header-actions",
    /**
     * Class name of the toggle button element
     */
    pcToggleButton = "p-panel-toggle-button",
    /**
     * Class name of the content container element
     */
    contentContainer = "p-panel-content-container",
    /**
     * Class name of the content element
     */
    content = "p-panel-content",
    /**
     * Class name of the footer element
     */
    footer = "p-panel-footer"
}

/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
declare class Panel extends BaseComponent<PanelPassThrough> implements BlockableUI {
    $pcPanel: Panel | undefined;
    _componentStyle: PanelStyle;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Id of the component.
     */
    id: string | undefined;
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @group Props
     */
    toggleable: boolean | undefined;
    /**
     * Header text of the panel.
     * @group Props
     */
    _header: string | undefined;
    /**
     * Internal collapsed state
     */
    _collapsed: boolean | undefined;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @group Props
     */
    get collapsed(): boolean | undefined;
    set collapsed(value: boolean | undefined);
    /**
     * Style class of the component.
     * @group Props
     * @deprecated since v20.0.0, use `class` instead.
     */
    styleClass: string | undefined;
    /**
     * Position of the icons.
     * @group Props
     */
    iconPos: 'start' | 'end' | 'center';
    /**
     * Specifies if header of panel cannot be displayed.
     * @group Props
     */
    showHeader: boolean;
    /**
     * Specifies the toggler element to toggle the panel content.
     * @group Props
     */
    toggler: 'icon' | 'header';
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    toggleButtonProps: any;
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New Value.
     * @group Emits
     */
    collapsedChange: EventEmitter<boolean | undefined>;
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onBeforeToggle: EventEmitter<PanelBeforeToggleEvent>;
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onAfterToggle: EventEmitter<PanelAfterToggleEvent>;
    animating: i0.WritableSignal<boolean>;
    footerFacet: Nullable<TemplateRef<any>>;
    /**
     * Defines template option for header.
     * @group Templates
     */
    headerTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for icon.
     * @example
     * ```html
     * <ng-template #icon> </ng-template>
     * ```
     * @group Templates
     */
    iconTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for content.
     * @example
     * ```html
     * <ng-template #content> </ng-template>
     * ```
     * @group Templates
     */
    contentTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for footer.
     * @example
     * ```html
     * <ng-template #footer> </ng-template>
     * ```
     * @group Templates
     */
    footerTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for headerIcon.
     * @type {TemplateRef<PanelHeaderIconsTemplateContext>} context - context of the template.
     * @example
     * ```html
     * <ng-template #headericons let-collapsed> </ng-template>
     * ```
     * @see {@link PanelHeaderIconsTemplateContext}
     * @group Templates
     */
    headerIconsTemplate: TemplateRef<PanelHeaderIconsTemplateContext> | undefined;
    _headerTemplate: TemplateRef<any> | undefined;
    _iconTemplate: TemplateRef<any> | undefined;
    _contentTemplate: TemplateRef<any> | undefined;
    _footerTemplate: TemplateRef<any> | undefined;
    _headerIconsTemplate: TemplateRef<any> | undefined;
    contentWrapperViewChild: ElementRef;
    get buttonAriaLabel(): string | undefined;
    onHeaderClick(event: MouseEvent): void;
    onIconClick(event: MouseEvent): void;
    toggle(event: MouseEvent): false | undefined;
    expand(): void;
    collapse(): void;
    getBlockableElement(): HTMLElement;
    updateTabIndex(): void;
    onKeyDown(event: KeyboardEvent): void;
    onToggleDone(event: any): void;
    templates: QueryList<PrimeTemplate> | undefined;
    onAfterContentInit(): void;
    dataP(): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<Panel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Panel, "p-panel", never, { "id": { "alias": "id"; "required": false; }; "toggleable": { "alias": "toggleable"; "required": false; }; "_header": { "alias": "header"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "iconPos": { "alias": "iconPos"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "toggler": { "alias": "toggler"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "toggleButtonProps": { "alias": "toggleButtonProps"; "required": false; }; }, { "collapsedChange": "collapsedChange"; "onBeforeToggle": "onBeforeToggle"; "onAfterToggle": "onAfterToggle"; }, ["footerFacet", "headerTemplate", "iconTemplate", "contentTemplate", "footerTemplate", "headerIconsTemplate", "templates"], ["p-header", "*", "p-footer"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_toggleable: unknown;
    static ngAcceptInputType_collapsed: unknown;
    static ngAcceptInputType_showHeader: unknown;
}
declare class PanelModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PanelModule, never, [typeof Panel, typeof i2.SharedModule, typeof i1.BindModule], [typeof Panel, typeof i2.SharedModule, typeof i1.BindModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PanelModule>;
}

export { Panel, PanelClasses, PanelModule, PanelStyle };
