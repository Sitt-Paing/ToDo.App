export * from 'primeng/types/panel';
import { trigger, state, transition, style as style$2, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, EventEmitter, signal, booleanAttribute, ContentChildren, ViewChild, ContentChild, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { uuid } from '@primeuix/utils';
import { SharedModule, Footer, PrimeTemplate } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind, BindModule } from 'primeng/bind';
import * as i3 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { PlusIcon, MinusIcon } from 'primeng/icons';
import { style as style$1 } from '@primeuix/styles/panel';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${style$1}

    /* For PrimeNG */
    .p-panel-collapsed .p-panel-content-container,
    .p-panel-content-container.ng-animating {
        overflow: hidden !important;
    }

`;
const classes = {
    root: ({ instance }) => [
        'p-panel p-component',
        {
            'p-panel-toggleable': instance.toggleable,
            'p-panel-expanded': !instance._collapsed && instance.toggleable,
            'p-panel-collapsed': instance._collapsed && instance.toggleable
        }
    ],
    header: 'p-panel-header',
    title: 'p-panel-title',
    headerActions: ({ instance }) => [
        'p-panel-header-actions',
        {
            'p-panel-icons-start': instance.iconPos === 'start',
            'p-panel-icons-end': instance.iconPos === 'end',
            'p-panel-icons-center': instance.iconPos === 'center'
        }
    ],
    pcToggleButton: 'p-panel-toggle-button',
    contentContainer: 'p-panel-content-container',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
};
class PanelStyle extends BaseStyle {
    name = 'panel';
    style = style;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: PanelStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: PanelStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: PanelStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primeng.org/panel/)
 *
 * @module panelstyle
 *
 */
var PanelClasses;
(function (PanelClasses) {
    /**
     * Class name of the root element
     */
    PanelClasses["root"] = "p-panel";
    /**
     * Class name of the header element
     */
    PanelClasses["header"] = "p-panel-header";
    /**
     * Class name of the title element
     */
    PanelClasses["title"] = "p-panel-title";
    /**
     * Class name of the header actions element
     */
    PanelClasses["headerActions"] = "p-panel-header-actions";
    /**
     * Class name of the toggle button element
     */
    PanelClasses["pcToggleButton"] = "p-panel-toggle-button";
    /**
     * Class name of the content container element
     */
    PanelClasses["contentContainer"] = "p-panel-content-container";
    /**
     * Class name of the content element
     */
    PanelClasses["content"] = "p-panel-content";
    /**
     * Class name of the footer element
     */
    PanelClasses["footer"] = "p-panel-footer";
})(PanelClasses || (PanelClasses = {}));

const PANEL_INSTANCE = new InjectionToken('PANEL_INSTANCE');
/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
class Panel extends BaseComponent {
    $pcPanel = inject(PANEL_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    _componentStyle = inject(PanelStyle);
    bindDirectiveInstance = inject(Bind, { self: true });
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    /**
     * Id of the component.
     */
    id = uuid('pn_id_');
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @group Props
     */
    toggleable;
    /**
     * Header text of the panel.
     * @group Props
     */
    _header;
    /**
     * Internal collapsed state
     */
    _collapsed;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @group Props
     */
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(value) {
        this._collapsed = value;
    }
    /**
     * Style class of the component.
     * @group Props
     * @deprecated since v20.0.0, use `class` instead.
     */
    styleClass;
    /**
     * Position of the icons.
     * @group Props
     */
    iconPos = 'end';
    /**
     * Specifies if header of panel cannot be displayed.
     * @group Props
     */
    showHeader = true;
    /**
     * Specifies the toggler element to toggle the panel content.
     * @group Props
     */
    toggler = 'icon';
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    toggleButtonProps;
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New Value.
     * @group Emits
     */
    collapsedChange = new EventEmitter();
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onBeforeToggle = new EventEmitter();
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onAfterToggle = new EventEmitter();
    animating = signal(false, ...(ngDevMode ? [{ debugName: "animating" }] : []));
    footerFacet;
    /**
     * Defines template option for header.
     * @group Templates
     */
    headerTemplate;
    /**
     * Defines template option for icon.
     * @example
     * ```html
     * <ng-template #icon> </ng-template>
     * ```
     * @group Templates
     */
    iconTemplate;
    /**
     * Defines template option for content.
     * @example
     * ```html
     * <ng-template #content> </ng-template>
     * ```
     * @group Templates
     */
    contentTemplate;
    /**
     * Defines template option for footer.
     * @example
     * ```html
     * <ng-template #footer> </ng-template>
     * ```
     * @group Templates
     */
    footerTemplate;
    /**
     * Defines template option for headerIcon.
     * @type {TemplateRef<PanelHeaderIconsTemplateContext>} context - context of the template.
     * @example
     * ```html
     * <ng-template #headericons let-collapsed> </ng-template>
     * ```
     * @see {@link PanelHeaderIconsTemplateContext}
     * @group Templates
     */
    headerIconsTemplate;
    _headerTemplate;
    _iconTemplate;
    _contentTemplate;
    _footerTemplate;
    _headerIconsTemplate;
    contentWrapperViewChild;
    get buttonAriaLabel() {
        return this._header;
    }
    onHeaderClick(event) {
        if (this.toggler === 'header') {
            this.toggle(event);
        }
    }
    onIconClick(event) {
        if (this.toggler === 'icon') {
            this.toggle(event);
        }
    }
    toggle(event) {
        if (this.animating()) {
            return false;
        }
        this.animating.set(true);
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand();
            else
                this.collapse();
        }
        event.preventDefault();
    }
    expand() {
        this._collapsed = false;
        this.collapsedChange.emit(false);
        this.updateTabIndex();
    }
    collapse() {
        this._collapsed = true;
        this.collapsedChange.emit(true);
        this.updateTabIndex();
    }
    getBlockableElement() {
        return this.el.nativeElement;
    }
    updateTabIndex() {
        if (this.contentWrapperViewChild) {
            const focusableElements = this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]');
            focusableElements.forEach((element) => {
                if (this.collapsed) {
                    element.setAttribute('tabindex', '-1');
                }
                else {
                    element.removeAttribute('tabindex');
                }
            });
        }
    }
    onKeyDown(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            this.toggle(event);
            event.preventDefault();
        }
    }
    onToggleDone(event) {
        this.animating.set(false);
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    }
    templates;
    onAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this._headerTemplate = item.template;
                    break;
                case 'content':
                    this._contentTemplate = item.template;
                    break;
                case 'footer':
                    this._footerTemplate = item.template;
                    break;
                case 'icons':
                    this._iconTemplate = item.template;
                    break;
                case 'headericons':
                    this._headerIconsTemplate = item.template;
                    break;
                default:
                    this._contentTemplate = item.template;
                    break;
            }
        });
    }
    dataP() {
        return this.cn({
            toggleable: this.toggleable
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Panel, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.3.15", type: Panel, isStandalone: true, selector: "p-panel", inputs: { id: "id", toggleable: ["toggleable", "toggleable", booleanAttribute], _header: ["header", "_header"], collapsed: ["collapsed", "collapsed", booleanAttribute], styleClass: "styleClass", iconPos: "iconPos", showHeader: ["showHeader", "showHeader", booleanAttribute], toggler: "toggler", transitionOptions: "transitionOptions", toggleButtonProps: "toggleButtonProps" }, outputs: { collapsedChange: "collapsedChange", onBeforeToggle: "onBeforeToggle", onAfterToggle: "onAfterToggle" }, host: { properties: { "id": "id", "class": "cn(cx('root'), styleClass)", "attr.data-p": "dataP()" } }, providers: [PanelStyle, { provide: PANEL_INSTANCE, useExisting: Panel }, { provide: PARENT_INSTANCE, useExisting: Panel }], queries: [{ propertyName: "footerFacet", first: true, predicate: Footer, descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["header"] }, { propertyName: "iconTemplate", first: true, predicate: ["icons"] }, { propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "footerTemplate", first: true, predicate: ["footer"] }, { propertyName: "headerIconsTemplate", first: true, predicate: ["headericons"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "contentWrapperViewChild", first: true, predicate: ["contentWrapper"], descendants: true }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
            <span [pBind]="ptm('title')" [class]="cx('title')" *ngIf="_header" [attr.id]="id + '_header'">{{ _header }}</span>
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <div [pBind]="ptm('headerActions')" [class]="cx('headerActions')">
                <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                <p-button
                    *ngIf="toggleable"
                    [attr.id]="id + '_header'"
                    severity="secondary"
                    [text]="true"
                    [rounded]="true"
                    type="button"
                    role="button"
                    [styleClass]="cx('pcToggleButton')"
                    [attr.aria-label]="buttonAriaLabel"
                    [attr.aria-controls]="id + '_content'"
                    [attr.aria-expanded]="!collapsed"
                    (click)="onIconClick($event)"
                    (keydown)="onKeyDown($event)"
                    [buttonProps]="toggleButtonProps"
                    [pt]="ptm('pcToggleButton')"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!headerIconsTemplate && !_headerIconsTemplate && !toggleButtonProps?.icon">
                            <ng-container *ngIf="!collapsed">
                                <svg data-p-icon="minus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>

                            <ng-container *ngIf="collapsed">
                                <svg data-p-icon="plus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>
                        </ng-container>

                        <ng-template *ngTemplateOutlet="headerIconsTemplate || _headerIconsTemplate; context: { $implicit: collapsed }"></ng-template>
                    </ng-template>
                </p-button>
            </div>
        </div>
        <div
            [pBind]="ptm('contentContainer')"
            [class]="cx('contentContainer')"
            [id]="id + '_content'"
            role="region"
            [attr.aria-labelledby]="id + '_header'"
            [attr.aria-hidden]="collapsed"
            [attr.tabindex]="collapsed ? '-1' : undefined"
            [@panelContent]="
                collapsed
                    ? {
                          value: 'hidden',
                          params: {
                              transitionParams: animating() ? transitionOptions : '0ms',
                              height: '0',
                              opacity: '0'
                          }
                      }
                    : {
                          value: 'visible',
                          params: {
                              transitionParams: animating() ? transitionOptions : '0ms',
                              height: '*',
                              opacity: '1'
                          }
                      }
            "
            (@panelContent.done)="onToggleDone($event)"
        >
            <div [pBind]="ptm('content')" [class]="cx('content')" #contentWrapper>
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>

            <div [pBind]="ptm('footer')" [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: PlusIcon, selector: "[data-p-icon=\"plus\"]" }, { kind: "component", type: MinusIcon, selector: "[data-p-icon=\"minus\"]" }, { kind: "ngmodule", type: ButtonModule }, { kind: "component", type: i3.Button, selector: "p-button", inputs: ["hostName", "type", "badge", "disabled", "raised", "rounded", "text", "plain", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "iconPos", "icon", "label", "loading", "loadingIcon", "severity", "buttonProps", "fluid"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }, { kind: "directive", type: i1.Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [
            trigger('panelContent', [
                state('hidden', style$2({
                    height: '0'
                })),
                state('void', style$2({
                    height: '{{height}}'
                }), { params: { height: '0' } }),
                state('visible', style$2({
                    height: '*'
                })),
                transition('visible <=> hidden', [animate('{{transitionParams}}')]),
                transition('void => hidden', animate('{{transitionParams}}')),
                transition('void => visible', animate('{{transitionParams}}'))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Panel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-panel',
                    standalone: true,
                    imports: [CommonModule, PlusIcon, MinusIcon, ButtonModule, SharedModule, BindModule],
                    template: `
        <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
            <span [pBind]="ptm('title')" [class]="cx('title')" *ngIf="_header" [attr.id]="id + '_header'">{{ _header }}</span>
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <div [pBind]="ptm('headerActions')" [class]="cx('headerActions')">
                <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                <p-button
                    *ngIf="toggleable"
                    [attr.id]="id + '_header'"
                    severity="secondary"
                    [text]="true"
                    [rounded]="true"
                    type="button"
                    role="button"
                    [styleClass]="cx('pcToggleButton')"
                    [attr.aria-label]="buttonAriaLabel"
                    [attr.aria-controls]="id + '_content'"
                    [attr.aria-expanded]="!collapsed"
                    (click)="onIconClick($event)"
                    (keydown)="onKeyDown($event)"
                    [buttonProps]="toggleButtonProps"
                    [pt]="ptm('pcToggleButton')"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!headerIconsTemplate && !_headerIconsTemplate && !toggleButtonProps?.icon">
                            <ng-container *ngIf="!collapsed">
                                <svg data-p-icon="minus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>

                            <ng-container *ngIf="collapsed">
                                <svg data-p-icon="plus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>
                        </ng-container>

                        <ng-template *ngTemplateOutlet="headerIconsTemplate || _headerIconsTemplate; context: { $implicit: collapsed }"></ng-template>
                    </ng-template>
                </p-button>
            </div>
        </div>
        <div
            [pBind]="ptm('contentContainer')"
            [class]="cx('contentContainer')"
            [id]="id + '_content'"
            role="region"
            [attr.aria-labelledby]="id + '_header'"
            [attr.aria-hidden]="collapsed"
            [attr.tabindex]="collapsed ? '-1' : undefined"
            [@panelContent]="
                collapsed
                    ? {
                          value: 'hidden',
                          params: {
                              transitionParams: animating() ? transitionOptions : '0ms',
                              height: '0',
                              opacity: '0'
                          }
                      }
                    : {
                          value: 'visible',
                          params: {
                              transitionParams: animating() ? transitionOptions : '0ms',
                              height: '*',
                              opacity: '1'
                          }
                      }
            "
            (@panelContent.done)="onToggleDone($event)"
        >
            <div [pBind]="ptm('content')" [class]="cx('content')" #contentWrapper>
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>

            <div [pBind]="ptm('footer')" [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
                    animations: [
                        trigger('panelContent', [
                            state('hidden', style$2({
                                height: '0'
                            })),
                            state('void', style$2({
                                height: '{{height}}'
                            }), { params: { height: '0' } }),
                            state('visible', style$2({
                                height: '*'
                            })),
                            transition('visible <=> hidden', [animate('{{transitionParams}}')]),
                            transition('void => hidden', animate('{{transitionParams}}')),
                            transition('void => visible', animate('{{transitionParams}}'))
                        ])
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [PanelStyle, { provide: PANEL_INSTANCE, useExisting: Panel }, { provide: PARENT_INSTANCE, useExisting: Panel }],
                    host: {
                        '[id]': 'id',
                        '[class]': "cn(cx('root'), styleClass)",
                        '[attr.data-p]': 'dataP()'
                    },
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { id: [{
                type: Input
            }], toggleable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], _header: [{
                type: Input,
                args: ['header']
            }], collapsed: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], styleClass: [{
                type: Input
            }], iconPos: [{
                type: Input
            }], showHeader: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], toggler: [{
                type: Input
            }], transitionOptions: [{
                type: Input
            }], toggleButtonProps: [{
                type: Input
            }], collapsedChange: [{
                type: Output
            }], onBeforeToggle: [{
                type: Output
            }], onAfterToggle: [{
                type: Output
            }], footerFacet: [{
                type: ContentChild,
                args: [Footer]
            }], headerTemplate: [{
                type: ContentChild,
                args: ['header', { descendants: false }]
            }], iconTemplate: [{
                type: ContentChild,
                args: ['icons', { descendants: false }]
            }], contentTemplate: [{
                type: ContentChild,
                args: ['content', { descendants: false }]
            }], footerTemplate: [{
                type: ContentChild,
                args: ['footer', { descendants: false }]
            }], headerIconsTemplate: [{
                type: ContentChild,
                args: ['headericons', { descendants: false }]
            }], contentWrapperViewChild: [{
                type: ViewChild,
                args: ['contentWrapper']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class PanelModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: PanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: PanelModule, imports: [Panel, SharedModule, BindModule], exports: [Panel, SharedModule, BindModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: PanelModule, imports: [Panel, SharedModule, BindModule, SharedModule, BindModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: PanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Panel, SharedModule, BindModule],
                    exports: [Panel, SharedModule, BindModule]
                }]
        }] });

// Backwards compatibility

/**
 * Generated bundle index. Do not edit.
 */

export { Panel, PanelClasses, PanelModule, PanelStyle };
//# sourceMappingURL=primeng-panel.mjs.map
