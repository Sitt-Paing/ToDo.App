import { OrganizationChartPassThrough, OrganizationChartNodeSelectEvent, OrganizationChartNodeUnSelectEvent, OrganizationChartNodeExpandEvent, OrganizationChartNodeCollapseEvent } from 'primeng/types/organizationchart';
export * from 'primeng/types/organizationchart';
import * as rxjs from 'rxjs';
import { Subscription } from 'rxjs';
import * as i0 from '@angular/core';
import { ChangeDetectorRef, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import * as i2 from 'primeng/api';
import { TreeNode, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Nullable } from 'primeng/ts-helpers';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * OrganizationChart visualizes hierarchical organization data.
 *
 * [Live Demo](https://www.primeng.org/organizationchart)
 *
 * @module organizationchartstyle
 *
 */
declare enum OrganizationChartClasses {
    /**
     * Class name of the root element
     */
    root = "p-organizationchart",
    /**
     * Class name of the table element
     */
    table = "p-organizationchart-table",
    /**
     * Class name of the node element
     */
    node = "p-organizationchart-node",
    /**
     * Class name of the node toggle button element
     */
    nodeToggleButton = "p-organizationchart-node-toggle-button",
    /**
     * Class name of the node toggle button icon element
     */
    nodeToggleButtonIcon = "p-organizationchart-node-toggle-button-icon",
    /**
     * Class name of the connectors element
     */
    connectors = "p-organizationchart-connectors",
    /**
     * Class name of the connector down element
     */
    connectorDown = "p-organizationchart-connector-down",
    /**
     * Class name of the connector left element
     */
    connectorLeft = "p-organizationchart-connector-left",
    /**
     * Class name of the connector right element
     */
    connectorRight = "p-organizationchart-connector-right",
    /**
     * Class name of the node children element
     */
    nodeChildren = "p-organizationchart-node-children"
}
declare class OrganizationChartStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-organizationchart-preservespace': any;
        })[];
        table: string;
        node: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-organizationchart-node': boolean;
            'p-organizationchart-node-selectable': any;
            'p-organizationchart-node-selected': any;
        })[];
        nodeToggleButton: string;
        nodeToggleButtonIcon: string;
        connectors: string;
        connectorDown: string;
        connectorLeft: ({ first }: {
            first: any;
        }) => (string | {
            'p-organizationchart-connector-top': boolean;
        })[];
        connectorRight: ({ last }: {
            last: any;
        }) => (string | {
            'p-organizationchart-connector-top': boolean;
        })[];
        nodeChildren: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationChartStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrganizationChartStyle>;
}
interface OrganizationChartStyle extends BaseStyle {
}

declare class OrganizationChartNode extends BaseComponent {
    cd: ChangeDetectorRef;
    node: TreeNode<any> | undefined;
    root: boolean | undefined;
    first: boolean | undefined;
    last: boolean | undefined;
    collapsible: boolean | undefined;
    chart: OrganizationChart;
    subscription: Subscription;
    _componentStyle: OrganizationChartStyle;
    constructor(chart: OrganizationChart, cd: ChangeDetectorRef);
    get leaf(): boolean | undefined;
    get colspan(): number | null | undefined;
    getChildStyle(node: TreeNode<any>): {
        visibility: string;
    };
    getPTOptions(key: string): any;
    getNodeOptions(lineTop: boolean, key: string): any;
    onNodeClick(event: Event, node: TreeNode): void;
    toggleNode(event: Event, node: TreeNode): void;
    isSelected(): boolean;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationChartNode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrganizationChartNode, "[pOrganizationChartNode]", never, { "node": { "alias": "node"; "required": false; }; "root": { "alias": "root"; "required": false; }; "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_first: unknown;
    static ngAcceptInputType_last: unknown;
    static ngAcceptInputType_collapsible: unknown;
}
/**
 * OrganizationChart visualizes hierarchical organization data.
 * @group Components
 */
declare class OrganizationChart extends BaseComponent<OrganizationChartPassThrough> {
    el: ElementRef;
    cd: ChangeDetectorRef;
    /**
     * An array of nested TreeNodes.
     * @group Props
     */
    value: TreeNode[] | undefined;
    /**
     * Style class of the component.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Defines the selection mode.
     * @group Props
     */
    selectionMode: 'single' | 'multiple' | null | undefined;
    /**
     * Whether the nodes can be expanded or toggled.
     * @group Props
     */
    collapsible: boolean | undefined;
    /**
     * Whether the space allocated by a node is preserved when hidden.
     * @deprecated since v20.0.0.
     * @group Props
     */
    preserveSpace: boolean;
    /**
     * A single treenode instance or an array to refer to the selections.
     * @group Props
     */
    get selection(): any;
    set selection(val: any);
    /**
     * Callback to invoke on selection change.
     * @param {*} any - selected value.
     * @group Emits
     */
    selectionChange: EventEmitter<any>;
    /**
     * Callback to invoke when a node is selected.
     * @param {OrganizationChartNodeSelectEvent} event - custom node select event.
     * @group Emits
     */
    onNodeSelect: EventEmitter<OrganizationChartNodeSelectEvent>;
    /**
     * Callback to invoke when a node is unselected.
     * @param {OrganizationChartNodeUnSelectEvent} event - custom node unselect event.
     * @group Emits
     */
    onNodeUnselect: EventEmitter<OrganizationChartNodeUnSelectEvent>;
    /**
     * Callback to invoke when a node is expanded.
     * @param {OrganizationChartNodeExpandEvent} event - custom node expand event.
     * @group Emits
     */
    onNodeExpand: EventEmitter<OrganizationChartNodeExpandEvent>;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {OrganizationChartNodeCollapseEvent} event - custom node collapse event.
     * @group Emits
     */
    onNodeCollapse: EventEmitter<OrganizationChartNodeCollapseEvent>;
    templates: Nullable<QueryList<PrimeTemplate>>;
    togglerIconTemplate: TemplateRef<any> | undefined;
    templateMap: any;
    _togglerIconTemplate: Nullable<TemplateRef<any>>;
    private selectionSource;
    _selection: any;
    initialized: Nullable<boolean>;
    selectionSource$: rxjs.Observable<any>;
    _componentStyle: OrganizationChartStyle;
    bindDirectiveInstance: Bind;
    $pcOrganizationChart: OrganizationChart | undefined;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    get root(): TreeNode<any> | null;
    onAfterContentInit(): void;
    getTemplateForNode(node: TreeNode): TemplateRef<any> | null;
    onNodeClick(event: Event, node: TreeNode): void;
    findIndexInSelection(node: TreeNode): number;
    isSelected(node: TreeNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrganizationChart, "p-organizationChart, p-organization-chart, p-organizationchart", never, { "value": { "alias": "value"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "selectionMode": { "alias": "selectionMode"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; "preserveSpace": { "alias": "preserveSpace"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; }, { "selectionChange": "selectionChange"; "onNodeSelect": "onNodeSelect"; "onNodeUnselect": "onNodeUnselect"; "onNodeExpand": "onNodeExpand"; "onNodeCollapse": "onNodeCollapse"; }, ["togglerIconTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_collapsible: unknown;
    static ngAcceptInputType_preserveSpace: unknown;
}
declare class OrganizationChartModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationChartModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OrganizationChartModule, never, [typeof OrganizationChart, typeof OrganizationChartNode, typeof i2.SharedModule], [typeof OrganizationChart, typeof OrganizationChartNode, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OrganizationChartModule>;
}

export { OrganizationChart, OrganizationChartClasses, OrganizationChartModule, OrganizationChartNode, OrganizationChartStyle };
