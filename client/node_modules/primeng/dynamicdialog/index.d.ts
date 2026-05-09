import * as i0 from '@angular/core';
import { Type, ViewContainerRef, ComponentRef, ApplicationRef, Injector, ProviderToken, InjectOptions } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { DialogStyle, DialogPassThrough, Dialog } from 'primeng/dialog';
import { Nullable } from 'primeng/ts-helpers';
import { Observable, Subject } from 'rxjs';
import * as i2 from 'primeng/api';

/**
 * Dialogs can be created dynamically with any component as the content using a DialogService.
 * @group Components
 */
declare class DynamicDialogConfig<DataType = any, InputValuesType extends Record<string, any> = {}> {
    /**
     * An object to pass to the component loaded inside the Dialog.
     * @group Props
     */
    data?: DataType;
    /**
     * An object to pass to the component loaded inside the Dialog.
     * @group Props
     */
    inputValues?: InputValuesType;
    /**
     * Header text of the dialog.
     * @group Props
     */
    header?: string;
    /**
     * Identifies the element (or elements) that labels the element it is applied to.
     * @group Props
     */
    ariaLabelledBy?: string;
    /**
     * Footer text of the dialog.
     * @group Props
     */
    footer?: string;
    /**
     * Width of the dialog.
     * @group Props
     */
    width?: string;
    /**
     * Height of the dialog.
     * @group Props
     */
    height?: string;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape?: boolean;
    /**
     * Specifies if autofocus should happen on show.
     * @group Props
     */
    focusOnShow?: boolean;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap?: boolean;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex?: number;
    /**
     * Whether to re-enforce layering through applying zIndex.
     * @group Props
     */
    autoZIndex?: boolean;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask?: boolean;
    /**
     * Inline style of the component.
     * @group Props
     */
    rtl?: boolean;
    /**
     * Inline style of the component.
     * @group Props
     */
    style?: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Inline style of the content.
     * @group Props
     */
    contentStyle?: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass?: string;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions?: string;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable?: boolean;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader?: boolean;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal?: boolean;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass?: string;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable?: boolean;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable?: boolean;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport?: boolean;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX?: number;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY?: number;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable?: boolean;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon?: string;
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon?: string;
    /**
     * Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".
     * @group Props
     */
    position?: string;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel?: string;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo?: any;
    /**
     * A boolean to determine if it can be duplicate.
     * @group Props
     */
    duplicate?: boolean;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints?: any;
    /**
     * Dialog templates.
     * @group Props
     */
    templates?: DynamicDialogTemplates;
}
/**
 * Defines valid templates in Dynamic Dialog.
 * @group Interface
 */
interface DynamicDialogTemplates {
    /**
     * Template of the header.
     */
    header?: Type<any>;
    /**
     * Template of the content.
     */
    content?: Type<any>;
    /**
     * Template of the footer.
     */
    footer?: Type<any>;
    /**
     * Template of the minimize icon.
     */
    minimizeicon?: Type<any>;
    /**
     * Template of the maximize icon.
     */
    maximizeicon?: Type<any>;
    /**
     * Template of the close icon.
     */
    closeicon?: Type<any>;
}

/**
 * Dynamic Dialog instance.
 * @group Components
 */
declare class DynamicDialogRef<ComponentType = any> {
    constructor();
    /**
     * Closes dialog.
     * @group Method
     */
    close(result?: any): void;
    /**
     * Destroys the dialog instance.
     * @group Method
     */
    destroy(): void;
    /**
     * Callback to invoke on drag start.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    dragStart(event: MouseEvent): void;
    /**
     * Callback to invoke on drag end.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    dragEnd(event: MouseEvent): void;
    /**
     * Callback to invoke on resize start.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    resizeInit(event: MouseEvent): void;
    /**
     * Callback to invoke on resize start.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    resizeEnd(event: MouseEvent): void;
    /**
     * Callback to invoke on dialog is maximized.
     * @param {*} value - Size value.
     * @group Method
     */
    maximize(value: any): void;
    private readonly _onClose;
    /**
     * Event triggered on dialog is closed.
     * @group Events
     */
    onClose: Observable<any>;
    private readonly _onDestroy;
    /**
     * Event triggered on dialog instance is destroyed.
     * @group Events
     */
    onDestroy: Observable<any>;
    private readonly _onDragStart;
    /**
     * Event triggered on drag start.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onDragStart: Observable<any>;
    private readonly _onDragEnd;
    /**
     * Event triggered on drag end.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onDragEnd: Observable<any>;
    private readonly _onResizeInit;
    /**
     * Event triggered on resize start.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onResizeInit: Observable<any>;
    private readonly _onResizeEnd;
    /**
     * Event triggered on resize end.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onResizeEnd: Observable<any>;
    private readonly _onMaximize;
    /**
     * Event triggered on dialog is maximized.
     * @param {*} value - Size value.
     * @group Events
     */
    onMaximize: Observable<any>;
    /**
     * Event triggered on child component load.
     * @param {*} value - Chi.
     * @group Events
     */
    readonly onChildComponentLoaded: Subject<ComponentType>;
}

declare class DynamicDialogContent {
    viewContainerRef: ViewContainerRef;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDialogContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DynamicDialogContent, "[pDynamicDialogContent]", never, {}, {}, never, never, true, never>;
}

/**
 *
 * DynamicDialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primeng.org/dynamicdialog)
 *
 * @module dynamicdialogstyle
 *
 */
declare enum DynamicDialogClasses {
    /**
     * Class name of the mask element
     */
    mask = "p-dialog-mask",
    /**
     * Class name of the root element
     */
    root = "p-dialog",
    /**
     * Class name of the header element
     */
    header = "p-dialog-header",
    /**
     * Class name of the title element
     */
    title = "p-dialog-title",
    /**
     * Class name of the header actions element
     */
    headerActions = "p-dialog-header-actions",
    /**
     * Class name of the maximize button element
     */
    pcMaximizeButton = "p-dialog-maximize-button",
    /**
     * Class name of the close button element
     */
    pcCloseButton = "p-dialog-close-button",
    /**
     * Class name of the content element
     */
    content = "p-dialog-content",
    /**
     * Class name of the footer element
     */
    footer = "p-dialog-footer"
}
declare class DynamicDialogStyle extends DialogStyle {
    name: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDialogStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicDialogStyle>;
}
interface DynamicDialogStyle {
}

declare class DynamicDialog extends BaseComponent<DialogPassThrough> {
    ddconfig: DynamicDialogConfig;
    private dialogRef;
    _componentStyle: DynamicDialogStyle;
    $pcDynamicDialog: DynamicDialog | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    visible: boolean;
    componentRef: Nullable<ComponentRef<any>>;
    id: string;
    insertionPoint: Nullable<DynamicDialogContent>;
    dialog: Nullable<Dialog>;
    childComponentType: Nullable<Type<any>>;
    inputValues: Record<string, any>;
    get minX(): number;
    get minY(): number;
    get keepInViewport(): boolean;
    get maximizable(): boolean;
    get maximizeIcon(): string;
    get minimizeIcon(): string;
    get closable(): boolean;
    get position(): string;
    get defaultCloseAriaLabel(): string;
    get breakpoints(): any;
    get footerTemplate(): Type<any> | undefined;
    get headerTemplate(): Type<any> | undefined;
    get contentTemplate(): Type<any> | undefined;
    get minimizeIconTemplate(): any;
    get maximizeIconTemplate(): any;
    get closeIconTemplate(): Type<any> | undefined;
    get dialogStyle(): {
        height?: string | undefined;
        width?: string | undefined;
    };
    get header(): string | undefined;
    get data(): any;
    get dialogId(): string;
    maximized: boolean | undefined;
    dragging: boolean | undefined;
    resizing: boolean | undefined;
    ariaLabelledBy: string | undefined | null;
    _style: any;
    styleElement: any;
    lastPageX: number | undefined;
    lastPageY: number | undefined;
    contentViewChild: any;
    footerViewChild: any;
    headerViewChild: any;
    maskViewChild: any;
    maskClickListener: any;
    documentDragListener: any;
    documentDragEndListener: any;
    documentResizeListener: any;
    documentResizeEndListener: any;
    documentEscapeListener: any;
    constructor(ddconfig: DynamicDialogConfig, dialogRef: DynamicDialogRef);
    onAfterViewInit(): void;
    getAriaLabelledBy(): string | null;
    loadChildComponent(componentType: Type<any>): void;
    onDialogHide(event: any): void;
    onDialogMaximize(event: any): void;
    onDialogResizeInit(event: MouseEvent): void;
    onDialogResizeEnd(event: MouseEvent): void;
    onDialogDragEnd(event: DragEvent): void;
    close(): void;
    hide(): void;
    get _parent(): Element | undefined;
    get parentContent(): any;
    container: any;
    wrapper: any;
    unbindGlobalListeners(): void;
    onAnimationStart(event: any): void;
    onAnimationEnd(event: any): void;
    onContainerDestroy(): void;
    bindDocumentDragListener(): void;
    bindDocumentDragEndListener(): void;
    unbindDocumentDragEndListener(): void;
    unbindDocumentDragListener(): void;
    initDrag(event: MouseEvent): void;
    onDrag(event: MouseEvent): void;
    endDrag(event: MouseEvent): void;
    resetPosition(): void;
    bindDocumentResizeListeners(): void;
    unbindDocumentResizeListeners(): void;
    initResize(event: MouseEvent): void;
    onResize(event: MouseEvent): void;
    resizeEnd(event: MouseEvent): void;
    maximize(): void;
    enableModality(): void;
    disableModality(): void;
    unbindMaskClickListener(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    createStyle(): void;
    destroyStyle(): void;
    onDestroy(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicDialog, "p-dynamicDialog, p-dynamicdialog, p-dynamic-dialog", never, {}, {}, never, never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class DynamicDialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DynamicDialogModule, never, [typeof DynamicDialog, typeof i2.SharedModule], [typeof DynamicDialog, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DynamicDialogModule>;
}

/**
 * Dynamic Dialog component methods.
 * @group Service
 */
declare class DialogService {
    private appRef;
    private injector;
    private document;
    dialogComponentRefMap: Map<DynamicDialogRef<any>, ComponentRef<DynamicDialog>>;
    constructor(appRef: ApplicationRef, injector: Injector, document: Document);
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {*} componentType - Dynamic component for content template.
     * @param {DynamicDialogConfig} config - DynamicDialog object.
     * @returns {DynamicDialogRef} DynamicDialog instance.
     * @group Method
     */
    open<T, DataType = any, InputValuesType extends Record<string, any> = {}>(componentType: Type<T>, config: DynamicDialogConfig<DataType, InputValuesType>): DynamicDialogRef<T> | null;
    /**
     * Returns the dynamic dialog component instance.
     * @param {DynamicDialogRef} ref - DynamicDialog instance.
     * @group Method
     */
    getInstance(ref: DynamicDialogRef<any>): DynamicDialog | undefined;
    private appendDialogComponentToBody;
    private removeDialogComponentFromBody;
    private duplicationPermission;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DialogService>;
}

declare class DynamicDialogInjector implements Injector {
    private _parentInjector;
    private _additionalTokens;
    constructor(_parentInjector: Injector, _additionalTokens: WeakMap<any, any>);
    get<T>(token: ProviderToken<T>, notFoundValue?: T, options?: InjectOptions): T;
}

export { DialogService, DynamicDialog, DynamicDialogClasses, DynamicDialogConfig, DynamicDialogInjector, DynamicDialogModule, DynamicDialogRef, DynamicDialogStyle };
export type { DynamicDialogTemplates };
