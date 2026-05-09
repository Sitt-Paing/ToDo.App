import { MeterGroupPassThrough, MeterItem } from 'primeng/types/metergroup';
export * from 'primeng/types/metergroup';
import * as i0 from '@angular/core';
import { TemplateRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * MeterGroup is a group of process status indicators.
 *
 * [Live Demo](https://www.primeng.org/metergroup)
 *
 * @module metergroupstyle
 *
 */
declare enum MeterGroupClasses {
    /**
     * Class name of the root element
     */
    root = "p-metergroup",
    /**
     * Class name of the meters element
     */
    meters = "p-metergroup-meters",
    /**
     * Class name of the meter element
     */
    meter = "p-metergroup-meter",
    /**
     * Class name of the label list element
     */
    labelList = "p-metergroup-label-list",
    /**
     * Class name of the label element
     */
    label = "p-metergroup-label",
    /**
     * Class name of the label icon element
     */
    labelIcon = "p-metergroup-label-icon",
    /**
     * Class name of the label marker element
     */
    labelMarker = "p-metergroup-label-marker",
    /**
     * Class name of the label text element
     */
    labelText = "p-metergroup-label-text"
}
declare class MeterGroupStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-metergroup-horizontal': boolean;
            'p-metergroup-vertical': boolean;
        })[];
        meters: string;
        meter: string;
        labelList: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-metergroup-label-list-vertical': boolean;
            'p-metergroup-label-list-horizontal': boolean;
        })[];
        label: string;
        labelIcon: string;
        labelMarker: string;
        labelText: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroupStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MeterGroupStyle>;
}
interface MeterGroupStyle extends BaseStyle {
}

declare class MeterGroupLabel extends BaseComponent<MeterGroupPassThrough> {
    value: any[];
    labelPosition: 'start' | 'end';
    labelOrientation: 'horizontal' | 'vertical';
    min: number;
    max: number;
    iconTemplate: TemplateRef<any> | undefined;
    parentInstance: MeterGroup;
    _componentStyle: MeterGroupStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroupLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeterGroupLabel, "p-meterGroupLabel, p-metergrouplabel", never, { "value": { "alias": "value"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "labelOrientation": { "alias": "labelOrientation"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "iconTemplate": { "alias": "iconTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * MeterGroup displays scalar measurements within a known range.
 * @group Components
 */
declare class MeterGroup extends BaseComponent<MeterGroupPassThrough> {
    $pcMeterGroup: MeterGroup | undefined;
    bindDirectiveInstance: Bind;
    /**
     * Current value of the metergroup.
     * @group Props
     */
    value: MeterItem[] | undefined;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min: number;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max: number;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Specifies the label position of the component, valid values are 'start' and 'end'.
     * @group Props
     */
    labelPosition: 'start' | 'end';
    /**
     * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    labelOrientation: 'horizontal' | 'vertical' | undefined;
    /**
     * Style class of the element.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    get vertical(): boolean;
    labelTemplate: TemplateRef<any> | undefined;
    meterTemplate: TemplateRef<any> | undefined;
    endTemplate: TemplateRef<any> | undefined;
    startTemplate: TemplateRef<any> | undefined;
    iconTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    _labelTemplate: TemplateRef<any> | undefined;
    _meterTemplate: TemplateRef<any> | undefined;
    _endTemplate: TemplateRef<any> | undefined;
    _startTemplate: TemplateRef<any> | undefined;
    _iconTemplate: TemplateRef<any> | undefined;
    onAfterViewChecked(): void;
    _componentStyle: MeterGroupStyle;
    constructor();
    onAfterViewInit(): void;
    onAfterContentInit(): void;
    percent(meter?: number): number;
    percentValue(meter: number): string;
    meterStyle(val: MeterItem): {
        backgroundColor: string | undefined;
        width: string | false;
        height: string | false;
    };
    totalPercent(): number;
    percentages(): number[];
    trackByFn(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeterGroup, "p-meterGroup, p-metergroup, p-meter-group", never, { "value": { "alias": "value"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "labelOrientation": { "alias": "labelOrientation"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, ["labelTemplate", "meterTemplate", "endTemplate", "startTemplate", "iconTemplate", "templates"], never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class MeterGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MeterGroupModule, never, [typeof MeterGroup, typeof i2.SharedModule], [typeof MeterGroup, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MeterGroupModule>;
}

export { MeterGroup, MeterGroupClasses, MeterGroupLabel, MeterGroupModule, MeterGroupStyle };
