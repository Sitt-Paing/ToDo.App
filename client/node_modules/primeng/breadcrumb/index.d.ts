import { BreadcrumbPassThrough, BreadcrumbItemClickEvent } from 'primeng/types/breadcrumb';
export * from 'primeng/types/breadcrumb';
import * as i0 from '@angular/core';
import { EventEmitter, TemplateRef, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import * as i2 from 'primeng/api';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

declare class BreadCrumbStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: () => string[];
        list: string;
        homeItem: string;
        separator: string;
        item: ({ menuitem }: {
            menuitem: any;
        }) => (string | {
            'p-disabled': any;
        })[];
        itemLink: string;
        itemIcon: string;
        itemLabel: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadCrumbStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadCrumbStyle>;
}
/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primeng.org/breadcrumb/)
 *
 * @module breadcrumbstyle
 *
 */
declare enum BreadcrumbClasses {
    /**
     * Class name of the root element
     */
    root = "p-breadcrumb",
    /**
     * Class name of the list element
     */
    list = "p-breadcrumb-list",
    /**
     * Class name of the home item element
     */
    homeItem = "p-breadcrumb-home-item",
    /**
     * Class name of the separator element
     */
    separator = "p-breadcrumb-separator",
    /**
     * Class name of the item element
     */
    item = "p-breadcrumb-item",
    /**
     * Class name of the item link element
     */
    itemLink = "p-breadcrumb-item-link",
    /**
     * Class name of the item icon element
     */
    itemIcon = "p-breadcrumb-item-icon",
    /**
     * Class name of the item label element
     */
    itemLabel = "p-breadcrumb-item-label"
}
interface BreadcrumbStyle extends BaseStyle {
}

/**
 * Breadcrumb provides contextual information about page hierarchy.
 * @group Components
 */
declare class Breadcrumb extends BaseComponent<BreadcrumbPassThrough> {
    bindDirectiveInstance: Bind;
    /**
     * An array of menuitems.
     * @group Props
     */
    model: MenuItem[] | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * MenuItem configuration for the home icon.
     * @group Props
     */
    home: MenuItem | undefined;
    /**
     * Defines a string that labels the home icon for accessibility.
     * @group Props
     */
    homeAriaLabel: string | undefined;
    /**
     * Fired when an item is selected.
     * @param {BreadcrumbItemClickEvent} event - custom click event.
     * @group Emits
     */
    onItemClick: EventEmitter<BreadcrumbItemClickEvent>;
    _componentStyle: BreadCrumbStyle;
    router: Router;
    onClick(event: MouseEvent, item: MenuItem): void;
    /**
     * Defines template option for item.
     * @group Templates
     */
    itemTemplate: TemplateRef<any> | undefined;
    /**
     * Defines template option for separator.
     * @group Templates
     */
    separatorTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    _separatorTemplate: TemplateRef<any> | undefined;
    _itemTemplate: TemplateRef<any> | undefined;
    onAfterContentInit(): void;
    onAfterViewChecked(): void;
    getPTOptions(item: MenuItem, index: number, key: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Breadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Breadcrumb, "p-breadcrumb", never, { "model": { "alias": "model"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "home": { "alias": "home"; "required": false; }; "homeAriaLabel": { "alias": "homeAriaLabel"; "required": false; }; }, { "onItemClick": "onItemClick"; }, ["itemTemplate", "separatorTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class BreadcrumbModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BreadcrumbModule, never, [typeof Breadcrumb, typeof i2.SharedModule], [typeof Breadcrumb, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BreadcrumbModule>;
}

export { BreadCrumbStyle, Breadcrumb, BreadcrumbClasses, BreadcrumbModule };
export type { BreadcrumbStyle };
