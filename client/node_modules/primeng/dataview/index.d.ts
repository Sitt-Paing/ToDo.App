import { DataViewPassThrough, DataViewLazyLoadEvent, DataViewPageEvent, DataViewSortEvent, DataViewLayoutChangeEvent, DataViewPaginatorState } from 'primeng/types/dataview';
export * from 'primeng/types/dataview';
import * as i0 from '@angular/core';
import { ElementRef, TemplateRef, EventEmitter, SimpleChanges } from '@angular/core';
import * as i2 from 'primeng/api';
import { BlockableUI, FilterService } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Nullable } from 'primeng/ts-helpers';
import { Subscription } from 'rxjs';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * DataView displays data in grid or list layout with pagination and sorting features.
 *
 * [Live Demo](https://www.primeng.org/dataview/)
 *
 * @module dataviewstyle
 *
 */
declare enum DataViewClasses {
    /**
     * Class name of the root element
     */
    root = "p-dataview",
    /**
     * Class name of the header element
     */
    header = "p-dataview-header",
    /**
     * Class name of the loading element
     */
    loading = "p-dataview-loading",
    /**
     * Class name of the loading overlay element
     */
    loadingOverlay = "p-dataview-loading-overlay",
    /**
     * Class name of the loading icon element
     */
    loadingIcon = "p-dataview-loading-icon",
    /**
     * Class name of the paginator element
     */
    pcPaginator = "p-dataview-paginator-[position]",
    /**
     * Class name of the content element
     */
    content = "p-dataview-content",
    /**
     * Class name of the empty message element
     */
    emptyMessage = "p-dataview-empty-message",
    /**
     * Class name of the footer element
     */
    footer = "p-dataview-footer"
}
declare class DataViewStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-dataview-list': boolean;
            'p-dataview-grid': boolean;
        })[];
        header: string;
        loading: string;
        loadingOverlay: string;
        loadingIcon: string;
        pcPaginator: ({ position }: {
            position: any;
        }) => string;
        content: string;
        emptyMessage: string;
        footer: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DataViewStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataViewStyle>;
}
interface DataViewStyle extends BaseStyle {
}

/**
 * DataView displays data in grid or list layout with pagination and sorting features.
 * @group Components
 */
declare class DataView extends BaseComponent<DataViewPassThrough> implements BlockableUI {
    bindDirectiveInstance: Bind;
    $pcDataView: DataView | undefined;
    onAfterViewChecked(): void;
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    paginator: boolean | undefined;
    /**
     * Number of rows to display per page.
     * @group Props
     */
    rows: number | undefined;
    /**
     * Number of total records, defaults to length of value when not defined.
     * @group Props
     */
    totalRecords: number | undefined;
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    pageLinks: number;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    rowsPerPageOptions: number[] | any[] | undefined;
    /**
     * Position of the paginator.
     * @group Props
     */
    paginatorPosition: 'top' | 'bottom' | 'both';
    /**
     * Custom style class for paginator
     * @group Props
     */
    paginatorStyleClass: string | undefined;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShowPaginator: boolean;
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    paginatorDropdownAppendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    paginatorDropdownScrollHeight: string;
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate: string;
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport: boolean | undefined;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown: boolean | undefined;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon: boolean;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks: boolean;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy: boolean | undefined;
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    lazyLoadOnInit: boolean;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage: string;
    /**
     * Style class of the component.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Style class of the grid.
     * @group Props
     */
    gridStyleClass: string;
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    trackBy: Function;
    /**
     * Comma separated list of fields in the object graph to search against.
     * @group Props
     */
    filterBy: string | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale: string | undefined;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading: boolean | undefined;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon: string | undefined;
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    first: number | undefined;
    /**
     * Property name of data to use in sorting by default.
     * @group Props
     */
    sortField: string | undefined;
    /**
     * Order to sort the data by default.
     * @group Props
     */
    sortOrder: number | undefined;
    /**
     * An array of objects to display.
     * @group Props
     */
    value: any[] | undefined;
    /**
     * Defines the layout mode.
     * @group Props
     */
    layout: 'list' | 'grid';
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    onLazyLoad: EventEmitter<DataViewLazyLoadEvent>;
    /**
     * Callback to invoke when pagination occurs.
     * @param {DataViewPageEvent} event - Custom page event.
     * @group Emits
     */
    onPage: EventEmitter<DataViewPageEvent>;
    /**
     * Callback to invoke when sorting occurs.
     * @param {DataViewSortEvent} event - Custom sort event.
     * @group Emits
     */
    onSort: EventEmitter<DataViewSortEvent>;
    /**
     * Callback to invoke when changing layout.
     * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
     * @group Emits
     */
    onChangeLayout: EventEmitter<DataViewLayoutChangeEvent>;
    /**
     * Template for the list layout.
     * @group Templates
     */
    listTemplate: Nullable<TemplateRef<any>>;
    /**
     * Template for grid layout.
     * @group Templates
     */
    gridTemplate: TemplateRef<any>;
    /**
     * Template for the header section.
     * @group Templates
     */
    headerTemplate: TemplateRef<any>;
    /**
     * Template for the empty message section.
     * @group Templates
     */
    emptymessageTemplate: TemplateRef<any>;
    /**
     * Template for the footer section.
     * @group Templates
     */
    footerTemplate: TemplateRef<any>;
    /**
     * Template for the left side of paginator.
     * @group Templates
     */
    paginatorleft: TemplateRef<any>;
    /**r* Template for the right side of paginator.
     * @group Templates
     */
    paginatorright: TemplateRef<any>;
    /**
     * Template for items in paginator dropdown.
     * @group Templates
     */
    paginatordropdownitem: TemplateRef<any>;
    /**
     * Template for loading icon.
     * @group Templates
     */
    loadingicon: TemplateRef<any>;
    /**
     * Template for list icon.
     * @group Templates
     */
    listicon: TemplateRef<any>;
    /**
     * Template for grid icon.
     * @group Templates
     */
    gridicon: TemplateRef<any>;
    header: any;
    footer: any;
    _value: Nullable<any[]>;
    filteredValue: Nullable<any[]>;
    filterValue: Nullable<string>;
    initialized: Nullable<boolean>;
    _layout: 'list' | 'grid';
    translationSubscription: Nullable<Subscription>;
    _componentStyle: DataViewStyle;
    get emptyMessageLabel(): string;
    filterService: FilterService;
    onInit(): void;
    onAfterViewInit(): void;
    onChanges(simpleChanges: SimpleChanges): void;
    updateTotalRecords(): void;
    paginate(event: DataViewPaginatorState): void;
    sort(): void;
    isEmpty(): boolean;
    createLazyLoadMetadata(): DataViewLazyLoadEvent;
    getBlockableElement(): HTMLElement;
    filter(filter: string, filterMatchMode?: string): void;
    hasFilter(): boolean | "" | null | undefined;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataView, "p-dataView, p-dataview, p-data-view", never, { "paginator": { "alias": "paginator"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "totalRecords": { "alias": "totalRecords"; "required": false; }; "pageLinks": { "alias": "pageLinks"; "required": false; }; "rowsPerPageOptions": { "alias": "rowsPerPageOptions"; "required": false; }; "paginatorPosition": { "alias": "paginatorPosition"; "required": false; }; "paginatorStyleClass": { "alias": "paginatorStyleClass"; "required": false; }; "alwaysShowPaginator": { "alias": "alwaysShowPaginator"; "required": false; }; "paginatorDropdownAppendTo": { "alias": "paginatorDropdownAppendTo"; "required": false; }; "paginatorDropdownScrollHeight": { "alias": "paginatorDropdownScrollHeight"; "required": false; }; "currentPageReportTemplate": { "alias": "currentPageReportTemplate"; "required": false; }; "showCurrentPageReport": { "alias": "showCurrentPageReport"; "required": false; }; "showJumpToPageDropdown": { "alias": "showJumpToPageDropdown"; "required": false; }; "showFirstLastIcon": { "alias": "showFirstLastIcon"; "required": false; }; "showPageLinks": { "alias": "showPageLinks"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "lazyLoadOnInit": { "alias": "lazyLoadOnInit"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "gridStyleClass": { "alias": "gridStyleClass"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; "filterBy": { "alias": "filterBy"; "required": false; }; "filterLocale": { "alias": "filterLocale"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingIcon": { "alias": "loadingIcon"; "required": false; }; "first": { "alias": "first"; "required": false; }; "sortField": { "alias": "sortField"; "required": false; }; "sortOrder": { "alias": "sortOrder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; }, { "onLazyLoad": "onLazyLoad"; "onPage": "onPage"; "onSort": "onSort"; "onChangeLayout": "onChangeLayout"; }, ["listTemplate", "gridTemplate", "headerTemplate", "emptymessageTemplate", "footerTemplate", "paginatorleft", "paginatorright", "paginatordropdownitem", "loadingicon", "listicon", "gridicon", "header", "footer"], ["p-header", "p-footer"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_paginator: unknown;
    static ngAcceptInputType_rows: unknown;
    static ngAcceptInputType_totalRecords: unknown;
    static ngAcceptInputType_pageLinks: unknown;
    static ngAcceptInputType_alwaysShowPaginator: unknown;
    static ngAcceptInputType_showCurrentPageReport: unknown;
    static ngAcceptInputType_showJumpToPageDropdown: unknown;
    static ngAcceptInputType_showFirstLastIcon: unknown;
    static ngAcceptInputType_showPageLinks: unknown;
    static ngAcceptInputType_lazy: unknown;
    static ngAcceptInputType_lazyLoadOnInit: unknown;
    static ngAcceptInputType_loading: unknown;
    static ngAcceptInputType_first: unknown;
    static ngAcceptInputType_sortOrder: unknown;
}
declare class DataViewModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DataViewModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DataViewModule, never, [typeof DataView, typeof i2.SharedModule], [typeof DataView, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DataViewModule>;
}

export { DataView, DataViewClasses, DataViewModule, DataViewStyle };
