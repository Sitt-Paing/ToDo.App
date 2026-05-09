import * as i0 from '@angular/core';
import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { ChartPassThrough } from 'primeng/types/chart';
import * as i2 from 'primeng/api';

/**
 *
 * Chart groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primeng.org/chart/)
 *
 * @module chartstyle
 *
 */
declare enum ChartClasses {
    /**
     * Class name of the root element
     */
    root = "p-chart"
}
declare class ChartStyle extends BaseStyle {
    name: string;
    classes: {
        root: string;
    };
    inlineStyles: {
        root: ({ instance }: {
            instance: any;
        }) => {
            display: string;
            position: string;
            width: any;
            height: any;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChartStyle>;
}
interface ChartStyle extends BaseStyle {
}

/**
 * Chart groups a collection of contents in tabs.
 * @group Components
 */
declare class UIChart extends BaseComponent<ChartPassThrough> {
    el: ElementRef;
    private zone;
    $pcChart: UIChart | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Type of the chart.
     * @group Props
     */
    type: 'bar' | 'line' | 'scatter' | 'bubble' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | undefined;
    /**
     * Array of per-chart plugins to customize the chart behaviour.
     * @group Props
     */
    plugins: any[];
    /**
     * Width of the chart.
     * @group Props
     */
    width: string | undefined;
    /**
     * Height of the chart.
     * @group Props
     */
    height: string | undefined;
    /**
     * Whether the chart is redrawn on screen size change.
     * @group Props
     */
    responsive: boolean;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Data to display.
     * @group Props
     */
    get data(): any;
    set data(val: any);
    /**
     * Options to customize the chart.
     * @group Props
     */
    get options(): any;
    set options(val: any);
    /**
     * Callback to execute when an element on chart is clicked.
     * @group Emits
     */
    onDataSelect: EventEmitter<any>;
    isBrowser: boolean;
    initialized: boolean | undefined;
    _data: any;
    _options: any;
    chart: any;
    _componentStyle: ChartStyle;
    constructor(el: ElementRef, zone: NgZone);
    onAfterViewInit(): void;
    onCanvasClick(event: Event): void;
    initChart(): void;
    getCanvas(): any;
    getBase64Image(): any;
    generateLegend(): any;
    refresh(): void;
    reinit(): void;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UIChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UIChart, "p-chart", never, { "type": { "alias": "type"; "required": false; }; "plugins": { "alias": "plugins"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "data": { "alias": "data"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "onDataSelect": "onDataSelect"; }, never, never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_responsive: unknown;
}
declare class ChartModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ChartModule, never, [typeof UIChart, typeof i2.SharedModule], [typeof UIChart, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ChartModule>;
}

export { ChartClasses, ChartModule, ChartStyle, UIChart };
