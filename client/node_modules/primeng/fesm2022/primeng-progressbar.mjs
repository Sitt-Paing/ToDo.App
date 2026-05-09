export * from 'primeng/types/progressbar';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, booleanAttribute, numberAttribute, ContentChildren, ContentChild, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { style } from '@primeuix/styles/progressbar';
import { BaseStyle } from 'primeng/base';

const classes = {
    root: ({ instance }) => [
        'p-progressbar p-component',
        {
            'p-progressbar-determinate': instance.mode == 'determinate',
            'p-progressbar-indeterminate': instance.mode == 'indeterminate'
        }
    ],
    value: 'p-progressbar-value',
    label: 'p-progressbar-label'
};
class ProgressBarStyle extends BaseStyle {
    name = 'progressbar';
    style = style;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.primeng.org/progressbar)
 *
 * @module progressbarstyle
 *
 */
var ProgressBarClasses;
(function (ProgressBarClasses) {
    /**
     * Class name of the root element
     */
    ProgressBarClasses["root"] = "p-progressbar";
    /**
     * Class name of the value element
     */
    ProgressBarClasses["value"] = "p-progressbar-value";
    /**
     * Class name of the label element
     */
    ProgressBarClasses["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));

const PROGRESSBAR_INSTANCE = new InjectionToken('PROGRESSBAR_INSTANCE');
/**
 * ProgressBar is a process status indicator.
 * @group Components
 */
class ProgressBar extends BaseComponent {
    $pcProgressBar = inject(PROGRESSBAR_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    /**
     * Current value of the progress.
     * @group Props
     */
    value;
    /**
     * Whether to display the progress bar value.
     * @group Props
     */
    showValue = true;
    /**
     * Style class of the element.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the value element.
     * @group Props
     */
    valueStyleClass;
    /**
     * Unit sign appended to the value.
     * @group Props
     */
    unit = '%';
    /**
     * Defines the mode of the progress
     * @group Props
     */
    mode = 'determinate';
    /**
     * Color for the background of the progress.
     * @group Props
     */
    color;
    /**
     * Template of the content.
     * @group templates
     */
    contentTemplate;
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    _componentStyle = inject(ProgressBarStyle);
    templates;
    _contentTemplate;
    onAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this._contentTemplate = item.template;
                    break;
                default:
                    this._contentTemplate = item.template;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBar, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.3.15", type: ProgressBar, isStandalone: true, selector: "p-progressBar, p-progressbar, p-progress-bar", inputs: { value: ["value", "value", numberAttribute], showValue: ["showValue", "showValue", booleanAttribute], styleClass: "styleClass", valueStyleClass: "valueStyleClass", unit: "unit", mode: "mode", color: "color" }, host: { properties: { "attr.aria-valuemin": "0", "attr.aria-valuenow": "value", "attr.aria-valuemax": "100", "attr.aria-level": "value + unit", "class": "cn(cx('root'), styleClass)" } }, providers: [ProgressBarStyle, { provide: PROGRESSBAR_INSTANCE, useExisting: ProgressBar }, { provide: PARENT_INSTANCE, useExisting: ProgressBar }], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        <div *ngIf="mode === 'determinate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.width]="value + '%'" [style.display]="'flex'" [style.background]="color">
            <div [class]="cx('label')" [pBind]="ptm('label')">
                <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'">{{ value }}{{ unit }}</div>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
            </div>
        </div>
        <div *ngIf="mode === 'indeterminate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.background]="color"></div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Bind, selector: "[pBind]", inputs: ["pBind"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-progressBar, p-progressbar, p-progress-bar',
                    standalone: true,
                    imports: [CommonModule, SharedModule, Bind],
                    template: `
        <div *ngIf="mode === 'determinate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.width]="value + '%'" [style.display]="'flex'" [style.background]="color">
            <div [class]="cx('label')" [pBind]="ptm('label')">
                <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'">{{ value }}{{ unit }}</div>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
            </div>
        </div>
        <div *ngIf="mode === 'indeterminate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.background]="color"></div>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [ProgressBarStyle, { provide: PROGRESSBAR_INSTANCE, useExisting: ProgressBar }, { provide: PARENT_INSTANCE, useExisting: ProgressBar }],
                    host: {
                        '[attr.aria-valuemin]': '0',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuemax]': '100',
                        '[attr.aria-level]': 'value + unit',
                        '[class]': "cn(cx('root'), styleClass)"
                    },
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], showValue: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], styleClass: [{
                type: Input
            }], valueStyleClass: [{
                type: Input
            }], unit: [{
                type: Input
            }], mode: [{
                type: Input
            }], color: [{
                type: Input
            }], contentTemplate: [{
                type: ContentChild,
                args: ['content', { descendants: false }]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class ProgressBarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarModule, imports: [ProgressBar, SharedModule], exports: [ProgressBar, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarModule, imports: [ProgressBar, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ProgressBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ProgressBar, SharedModule],
                    exports: [ProgressBar, SharedModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressBar, ProgressBarClasses, ProgressBarModule, ProgressBarStyle };
//# sourceMappingURL=primeng-progressbar.mjs.map
