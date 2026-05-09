export * from 'primeng/types/fieldset';
import { trigger, state, transition, style as style$2, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, EventEmitter, booleanAttribute, ContentChildren, ContentChild, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind, BindModule } from 'primeng/bind';
import { MinusIcon, PlusIcon } from 'primeng/icons';
import { style as style$1 } from '@primeuix/styles/fieldset';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${style$1}

    /* For PrimeNG */
    .p-fieldset-collapsed > .p-fieldset-content-container,
    .p-fieldset-content-container.ng-animating {
        overflow: hidden;
    }
`;
const classes = {
    root: ({ instance }) => [
        'p-fieldset p-component',
        {
            'p-fieldset-toggleable': instance.toggleable,
            'p-fieldset-collapsed': instance.collapsed && instance.toggleable
        }
    ],
    legend: 'p-fieldset-legend',
    legendLabel: 'p-fieldset-legend-label',
    toggleButton: 'p-fieldset-toggle-button',
    toggleIcon: 'p-fieldset-toggle-icon',
    contentContainer: 'p-fieldset-content-container',
    content: 'p-fieldset-content'
};
class FieldsetStyle extends BaseStyle {
    name = 'fieldset';
    style = style;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: FieldsetStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: FieldsetStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: FieldsetStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * [Live Demo](https://www.primeng.org/fieldset/)
 *
 * @module fieldsetstyle
 *
 */
var FieldsetClasses;
(function (FieldsetClasses) {
    /**
     * Class name of the root element
     */
    FieldsetClasses["root"] = "p-fieldset";
    /**
     * Class name of the legend element
     */
    FieldsetClasses["legend"] = "p-fieldset-legend";
    /**
     * Class name of the legend label element
     */
    FieldsetClasses["legendLabel"] = "p-fieldset-legend-label";
    /**
     * Class name of the toggle icon element
     */
    FieldsetClasses["toggleIcon"] = "p-fieldset-toggle-icon";
    /**
     * Class name of the content container element
     */
    FieldsetClasses["contentContainer"] = "p-fieldset-content-container";
    /**
     * Class name of the content element
     */
    FieldsetClasses["content"] = "p-fieldset-content";
})(FieldsetClasses || (FieldsetClasses = {}));

const FIELDSET_INSTANCE = new InjectionToken('FIELDSET_INSTANCE');
/**
 * Fieldset is a grouping component with the optional content toggle feature.
 * @group Components
 */
class Fieldset extends BaseComponent {
    $pcFieldset = inject(FIELDSET_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    _componentStyle = inject(FieldsetStyle);
    bindDirectiveInstance = inject(Bind, { self: true });
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm('host'));
    }
    get dataP() {
        return this.cn({
            toggleable: this.toggleable
        });
    }
    /**
     * Header text of the fieldset.
     * @group Props
     */
    legend;
    /**
     * When specified, content can toggled by clicking the legend.
     * @group Props
     * @defaultValue false
     */
    toggleable;
    /**
     * Defines the default visibility state of the content.
     * * @group Props
     */
    collapsed = false;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Transition options of the panel animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Emits when the collapsed state changes.
     * @param {boolean} value - New value.
     * @group Emits
     */
    collapsedChange = new EventEmitter();
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom toggle event
     * @group Emits
     */
    onBeforeToggle = new EventEmitter();
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom toggle event
     * @group Emits
     */
    onAfterToggle = new EventEmitter();
    _id = uuid('pn_id_');
    get id() {
        return this._id;
    }
    get buttonAriaLabel() {
        return this.legend;
    }
    animating;
    /**
     * Defines the header template.
     * @group Templates
     */
    headerTemplate;
    /**
     * Defines the expandicon template.
     * @group Templates
     */
    expandIconTemplate;
    /**
     * Defines the collapseicon template.
     * @group Templates
     */
    collapseIconTemplate;
    /**
     * Defines the content template.
     * @group Templates
     */
    contentTemplate;
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.collapsed)
            this.expand();
        else
            this.collapse();
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        event.preventDefault();
    }
    onKeyDown(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            this.toggle(event);
            event.preventDefault();
        }
    }
    expand() {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    }
    collapse() {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone() {
        this.animating = false;
    }
    _headerTemplate;
    _expandIconTemplate;
    _collapseIconTemplate;
    _contentTemplate;
    templates;
    onAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this._headerTemplate = item.template;
                    break;
                case 'expandicon':
                    this._expandIconTemplate = item.template;
                    break;
                case 'collapseicon':
                    this._collapseIconTemplate = item.template;
                    break;
                case 'content':
                    this._contentTemplate = item.template;
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Fieldset, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.3.15", type: Fieldset, isStandalone: true, selector: "p-fieldset", inputs: { legend: "legend", toggleable: ["toggleable", "toggleable", booleanAttribute], collapsed: ["collapsed", "collapsed", booleanAttribute], style: "style", styleClass: "styleClass", transitionOptions: "transitionOptions" }, outputs: { collapsedChange: "collapsedChange", onBeforeToggle: "onBeforeToggle", onAfterToggle: "onAfterToggle" }, providers: [FieldsetStyle, { provide: FIELDSET_INSTANCE, useExisting: Fieldset }, { provide: PARENT_INSTANCE, useExisting: Fieldset }], queries: [{ propertyName: "headerTemplate", first: true, predicate: ["header"] }, { propertyName: "expandIconTemplate", first: true, predicate: ["expandicon"] }, { propertyName: "collapseIconTemplate", first: true, predicate: ["collapseicon"] }, { propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        <fieldset [attr.id]="id" [ngStyle]="style" [class]="cn(cx('root'), styleClass)" [pBind]="ptm('root')" [attr.data-p]="dataP">
            <legend [class]="cx('legend')" [pBind]="ptm('legend')">
                <ng-container *ngIf="toggleable; else legendContent">
                    <button
                        [attr.id]="id + '_header'"
                        tabindex="0"
                        role="button"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        [attr.aria-label]="buttonAriaLabel"
                        (click)="toggle($event)"
                        (keydown)="onKeyDown($event)"
                        [class]="cx('toggleButton')"
                        [pBind]="ptm('toggleButton')"
                    >
                        <ng-container *ngIf="collapsed">
                            <svg data-p-icon="plus" *ngIf="!expandIconTemplate && !_expandIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')" />
                            <span *ngIf="expandIconTemplate || _expandIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')">
                                <ng-container *ngTemplateOutlet="expandIconTemplate || _expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <svg data-p-icon="minus" *ngIf="!collapseIconTemplate && !_collapseIconTemplate" [class]="cx('toggleIcon')" [attr.aria-hidden]="true" [pBind]="ptm('toggleIcon')" />
                            <span *ngIf="collapseIconTemplate || _collapseIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate || _collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </button>
                </ng-container>
                <ng-template #legendContent>
                    <span [class]="cx('legendLabel')" [pBind]="ptm('legendLabel')">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                [class]="cx('contentContainer')"
                [pBind]="ptm('contentContainer')"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div [class]="cx('content')" [pBind]="ptm('content')">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: MinusIcon, selector: "[data-p-icon=\"minus\"]" }, { kind: "component", type: PlusIcon, selector: "[data-p-icon=\"plus\"]" }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }, { kind: "directive", type: i1.Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [
            trigger('fieldsetContent', [
                state('hidden', style$2({
                    height: '0'
                })),
                state('visible', style$2({
                    height: '*'
                })),
                transition('visible <=> hidden', [animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Fieldset, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-fieldset',
                    standalone: true,
                    imports: [CommonModule, MinusIcon, PlusIcon, SharedModule, BindModule],
                    template: `
        <fieldset [attr.id]="id" [ngStyle]="style" [class]="cn(cx('root'), styleClass)" [pBind]="ptm('root')" [attr.data-p]="dataP">
            <legend [class]="cx('legend')" [pBind]="ptm('legend')">
                <ng-container *ngIf="toggleable; else legendContent">
                    <button
                        [attr.id]="id + '_header'"
                        tabindex="0"
                        role="button"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        [attr.aria-label]="buttonAriaLabel"
                        (click)="toggle($event)"
                        (keydown)="onKeyDown($event)"
                        [class]="cx('toggleButton')"
                        [pBind]="ptm('toggleButton')"
                    >
                        <ng-container *ngIf="collapsed">
                            <svg data-p-icon="plus" *ngIf="!expandIconTemplate && !_expandIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')" />
                            <span *ngIf="expandIconTemplate || _expandIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')">
                                <ng-container *ngTemplateOutlet="expandIconTemplate || _expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <svg data-p-icon="minus" *ngIf="!collapseIconTemplate && !_collapseIconTemplate" [class]="cx('toggleIcon')" [attr.aria-hidden]="true" [pBind]="ptm('toggleIcon')" />
                            <span *ngIf="collapseIconTemplate || _collapseIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate || _collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </button>
                </ng-container>
                <ng-template #legendContent>
                    <span [class]="cx('legendLabel')" [pBind]="ptm('legendLabel')">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                [class]="cx('contentContainer')"
                [pBind]="ptm('contentContainer')"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div [class]="cx('content')" [pBind]="ptm('content')">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
                    animations: [
                        trigger('fieldsetContent', [
                            state('hidden', style$2({
                                height: '0'
                            })),
                            state('visible', style$2({
                                height: '*'
                            })),
                            transition('visible <=> hidden', [animate('{{transitionParams}}')]),
                            transition('void => *', animate(0))
                        ])
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [FieldsetStyle, { provide: FIELDSET_INSTANCE, useExisting: Fieldset }, { provide: PARENT_INSTANCE, useExisting: Fieldset }],
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { legend: [{
                type: Input
            }], toggleable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], collapsed: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], transitionOptions: [{
                type: Input
            }], collapsedChange: [{
                type: Output
            }], onBeforeToggle: [{
                type: Output
            }], onAfterToggle: [{
                type: Output
            }], headerTemplate: [{
                type: ContentChild,
                args: ['header', { descendants: false }]
            }], expandIconTemplate: [{
                type: ContentChild,
                args: ['expandicon', { descendants: false }]
            }], collapseIconTemplate: [{
                type: ContentChild,
                args: ['collapseicon', { descendants: false }]
            }], contentTemplate: [{
                type: ContentChild,
                args: ['content', { descendants: false }]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class FieldsetModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: FieldsetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: FieldsetModule, imports: [Fieldset, SharedModule, BindModule], exports: [Fieldset, SharedModule, BindModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: FieldsetModule, imports: [Fieldset, SharedModule, BindModule, SharedModule, BindModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: FieldsetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Fieldset, SharedModule, BindModule],
                    exports: [Fieldset, SharedModule, BindModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Fieldset, FieldsetClasses, FieldsetModule, FieldsetStyle };
//# sourceMappingURL=primeng-fieldset.mjs.map
