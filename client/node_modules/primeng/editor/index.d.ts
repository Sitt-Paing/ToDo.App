import { EditorPassThrough, EditorInitEvent, EditorTextChangeEvent, EditorSelectionChangeEvent, EditorChangeEvent, EditorFocusEvent, EditorBlurEvent } from 'primeng/types/editor';
export * from 'primeng/types/editor';
import * as i0 from '@angular/core';
import { EventEmitter, TemplateRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseEditableHolder } from 'primeng/baseeditableholder';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Nullable } from 'primeng/ts-helpers';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Editor groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primeng.org/editor/)
 *
 * @module editorstyle
 *
 */
declare enum EditorClasses {
    /**
     * Class name of the root element
     */
    root = "p-editor",
    /**
     * Class name of the toolbar element
     */
    toolbar = "p-editor-toolbar",
    /**
     * Class name of the content element
     */
    content = "p-editor-content"
}
declare class EditorStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-invalid': any;
        })[];
        toolbar: string;
        content: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditorStyle>;
}
interface EditorStyle extends BaseStyle {
}

declare const EDITOR_VALUE_ACCESSOR: any;
/**
 * Editor groups a collection of contents in tabs.
 * @group Components
 */
declare class Editor extends BaseEditableHolder<EditorPassThrough> {
    $pcEditor: Editor | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Inline style of the container.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the container.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Placeholder text to show when editor is empty.
     * @group Props
     */
    placeholder: string | undefined;
    /**
     * Whitelist of formats to display, see [here](https://quilljs.com/docs/formats/) for available options.
     * @group Props
     */
    formats: string[] | undefined;
    /**
     * Modules configuration of Editor, see [here](https://quilljs.com/docs/modules/) for available options.
     * @group Props
     */
    modules: object | undefined;
    /**
     * DOM Element or a CSS selector for a DOM Element, within which the editor’s p elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.
     * @group Props
     */
    bounds: HTMLElement | string | undefined;
    /**
     * DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..
     * @group Props
     */
    scrollingContainer: HTMLElement | string | undefined;
    /**
     * Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.
     * @group Props
     */
    debug: string | undefined;
    /**
     * Whether to instantiate the editor to read-only mode.
     * @group Props
     */
    get readonly(): boolean;
    set readonly(val: boolean);
    /**
     * Callback to invoke when the quill modules are loaded.
     * @param {EditorInitEvent} event - custom event.
     * @group Emits
     */
    onEditorInit: EventEmitter<EditorInitEvent>;
    /**
     * Callback to invoke when text of editor changes.
     * @param {EditorTextChangeEvent} event - custom event.
     * @group Emits
     */
    onTextChange: EventEmitter<EditorTextChangeEvent>;
    /**
     * Callback to invoke when selection of the text changes.
     * @param {EditorSelectionChangeEvent} event - custom event.
     * @group Emits
     */
    onSelectionChange: EventEmitter<EditorSelectionChangeEvent>;
    /**
     * Callback to invoke when editor content changes (combines both text and selection changes).
     * @param {EditorChangeEvent} event - custom event.
     * @group Emits
     */
    onEditorChange: EventEmitter<EditorChangeEvent>;
    /**
     * Callback to invoke when editor receives focus.
     * @param {EditorFocusEvent} event - custom event.
     * @group Emits
     */
    onFocus: EventEmitter<EditorFocusEvent>;
    /**
     * Callback to invoke when editor loses focus.
     * @param {EditorBlurEvent} event - custom event.
     * @group Emits
     */
    onBlur: EventEmitter<EditorBlurEvent>;
    toolbar: any;
    value: Nullable<string>;
    delayedCommand: Function | null;
    _readonly: boolean;
    quill: any;
    dynamicQuill: any;
    /**
     * Custom item template.
     * @group Templates
     */
    headerTemplate: Nullable<TemplateRef<any>>;
    templates: QueryList<PrimeTemplate>;
    _headerTemplate: TemplateRef<any> | undefined;
    private get isAttachedQuillEditorToDOM();
    private quillElements;
    private focusListener;
    private blurListener;
    _componentStyle: EditorStyle;
    constructor();
    onAfterContentInit(): void;
    /**
     * @override
     *
     * @see {@link BaseEditableHolder.writeControlValue}
     * Writes the value to the control.
     */
    writeControlValue(value: any): void;
    getQuill(): any;
    private initQuillEditor;
    private createQuillEditor;
    onDestroy(): void;
    private initQuillElements;
    static ɵfac: i0.ɵɵFactoryDeclaration<Editor, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Editor, "p-editor", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "formats": { "alias": "formats"; "required": false; }; "modules": { "alias": "modules"; "required": false; }; "bounds": { "alias": "bounds"; "required": false; }; "scrollingContainer": { "alias": "scrollingContainer"; "required": false; }; "debug": { "alias": "debug"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "onEditorInit": "onInit"; "onTextChange": "onTextChange"; "onSelectionChange": "onSelectionChange"; "onEditorChange": "onEditorChange"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["toolbar", "headerTemplate", "templates"], ["p-header"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class EditorModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EditorModule, never, [typeof Editor, typeof i2.SharedModule], [typeof Editor, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EditorModule>;
}

export { EDITOR_VALUE_ACCESSOR, Editor, EditorClasses, EditorModule, EditorStyle };
