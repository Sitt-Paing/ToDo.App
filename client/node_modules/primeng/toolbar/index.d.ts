import { ToolbarPassThrough } from 'primeng/types/toolbar';
export * from 'primeng/types/toolbar';
import * as i0 from '@angular/core';
import { TemplateRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primeng.org/toolbar/)
 *
 * @module toolbarstyle
 *
 */
declare enum ToolbarClasses {
    /**
     * Class name of the root element
     */
    root = "p-toolbar",
    /**
     * Class name of the start element
     */
    start = "p-toolbar-start",
    /**
     * Class name of the center element
     */
    center = "p-toolbar-center",
    /**
     * Class name of the end element
     */
    end = "p-toolbar-end"
}
declare class ToolbarStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: () => string[];
        start: string;
        center: string;
        end: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToolbarStyle>;
}
interface ToolbarStyle extends BaseStyle {
}

/**
 * Toolbar is a grouping component for buttons and other content.
 * @group Components
 */
declare class Toolbar extends BaseComponent<ToolbarPassThrough> implements BlockableUI {
    $pcToolbar: Toolbar | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Style class of the component.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    _componentStyle: ToolbarStyle;
    getBlockableElement(): HTMLElement;
    /**
     * Defines template option for start.
     * @group Templates
     */
    startTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for end.
     * @group Templates
     */
    endTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for center.
     * @group Templates
     */
    centerTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    _startTemplate: TemplateRef<any> | undefined;
    _endTemplate: TemplateRef<any> | undefined;
    _centerTemplate: TemplateRef<any> | undefined;
    onAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Toolbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Toolbar, "p-toolbar", never, { "styleClass": { "alias": "styleClass"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, {}, ["startTemplate", "endTemplate", "centerTemplate", "templates"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class ToolbarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToolbarModule, never, [typeof Toolbar, typeof i2.SharedModule, typeof i1.BindModule], [typeof Toolbar, typeof i2.SharedModule, typeof i1.BindModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToolbarModule>;
}

export { Toolbar, ToolbarClasses, ToolbarModule, ToolbarStyle };
