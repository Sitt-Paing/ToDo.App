export * from 'primeng/types/scrolltop';
import { trigger, state, transition, style as style$1, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, numberAttribute, ContentChildren, ContentChild, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { getWindowScrollTop } from '@primeuix/utils';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { Button } from 'primeng/button';
import { ChevronUpIcon } from 'primeng/icons';
import { ZIndexUtils } from 'primeng/utils';
import { style } from '@primeuix/styles/scrolltop';
import { BaseStyle } from 'primeng/base';

const classes = {
    root: ({ instance }) => ['p-scrolltop', { 'p-scrolltop-sticky': instance.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};
class ScrollTopStyle extends BaseStyle {
    name = 'scrolltop';
    style = style;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * [Live Demo](https://www.primeng.org/scrolltop/)
 *
 * @module scrolltopstyle
 *
 */
var ScrollTopClasses;
(function (ScrollTopClasses) {
    /**
     * Class name of the root element
     */
    ScrollTopClasses["root"] = "p-scrolltop";
    /**
     * Class name of the icon element
     */
    ScrollTopClasses["icon"] = "p-scrolltop-icon";
})(ScrollTopClasses || (ScrollTopClasses = {}));

const SCROLLTOP_INSTANCE = new InjectionToken('SCROLLTOP_INSTANCE');
/**
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 * @group Components
 */
class ScrollTop extends BaseComponent {
    $pcScrollTop = inject(SCROLLTOP_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    bindDirectiveInstance = inject(Bind, { self: true });
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Target of the ScrollTop.
     * @group Props
     */
    target = 'window';
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @group Props
     */
    threshold = 400;
    /**
     * Name of the icon or JSX.Element for icon.
     * @group Props
     */
    get icon() {
        return this._icon;
    }
    /**
     * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
     * @group Props
     */
    behavior = 'smooth';
    /**
     * A string value used to determine the display transition options.
     * @group Props
     */
    showTransitionOptions = '.15s';
    /**
     * A string value used to determine the hiding transition options.
     * @group Props
     */
    hideTransitionOptions = '.15s';
    /**
     * Establishes a string value that labels the scroll-top button.
     * @group Props
     */
    buttonAriaLabel;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @group Props
     */
    buttonProps = { rounded: true, severity: 'success' };
    /**
     * Template of the icon.
     * @group Templates
     */
    iconTemplate;
    templates;
    _iconTemplate;
    _icon;
    set icon(value) {
        this._icon = value;
    }
    documentScrollListener;
    parentScrollListener;
    visible = false;
    overlay;
    _componentStyle = inject(ScrollTopStyle);
    onInit() {
        if (this.target === 'window')
            this.bindDocumentScrollListener();
        else if (this.target === 'parent')
            this.bindParentScrollListener();
    }
    onAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'icon':
                    this._iconTemplate = item.template;
                    break;
            }
        });
    }
    onClick() {
        let scrollElement = this.target === 'window' ? this.document.defaultView : this.el.nativeElement.parentElement;
        scrollElement.scroll({
            top: 0,
            behavior: this.behavior
        });
    }
    onEnter(event) {
        switch (event.toState) {
            case 'open':
                this.overlay = event.element;
                ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
                break;
            case 'void':
                this.overlay = null;
                break;
        }
    }
    onLeave(event) {
        switch (event.toState) {
            case 'void':
                ZIndexUtils.clear(event.element);
                break;
        }
    }
    checkVisibility(scrollY) {
        if (scrollY > this.threshold)
            this.visible = true;
        else
            this.visible = false;
        this.cd.markForCheck();
    }
    bindParentScrollListener() {
        if (isPlatformBrowser(this.platformId)) {
            this.parentScrollListener = this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', () => {
                this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
            });
        }
    }
    bindDocumentScrollListener() {
        if (isPlatformBrowser(this.platformId)) {
            this.documentScrollListener = this.renderer.listen(this.document.defaultView, 'scroll', () => {
                this.checkVisibility(getWindowScrollTop());
            });
        }
    }
    unbindParentScrollListener() {
        if (this.parentScrollListener) {
            this.parentScrollListener();
            this.parentScrollListener = null;
        }
    }
    unbindDocumentScrollListener() {
        if (this.documentScrollListener) {
            this.documentScrollListener();
            this.documentScrollListener = null;
        }
    }
    onDestroy() {
        if (this.target === 'window')
            this.unbindDocumentScrollListener();
        else if (this.target === 'parent')
            this.unbindParentScrollListener();
        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTop, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.3.15", type: ScrollTop, isStandalone: true, selector: "p-scrollTop, p-scrolltop, p-scroll-top", inputs: { styleClass: "styleClass", style: "style", target: "target", threshold: ["threshold", "threshold", numberAttribute], icon: "icon", behavior: "behavior", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", buttonAriaLabel: "buttonAriaLabel", buttonProps: "buttonProps" }, providers: [ScrollTopStyle, { provide: SCROLLTOP_INSTANCE, useExisting: ScrollTop }, { provide: PARENT_INSTANCE, useExisting: ScrollTop }], queries: [{ propertyName: "iconTemplate", first: true, predicate: ["icon"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        <p-button
            *ngIf="visible"
            [@animation]="{
                value: 'open',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            (click)="onClick()"
            [pt]="ptm('pcButton')"
            [styleClass]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            type="button"
            [buttonProps]="buttonProps"
        >
            <ng-template #icon>
                <ng-container *ngIf="!iconTemplate && !_iconTemplate">
                    <span *ngIf="_icon" [class]="cn(cx('icon'), _icon)"></span>
                    <svg data-p-icon="chevron-up" *ngIf="!_icon" [class]="cx('icon')" />
                </ng-container>
                <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { styleClass: cx('icon') }"></ng-template>
            </ng-template>
        </p-button>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: ChevronUpIcon, selector: "[data-p-icon=\"chevron-up\"]" }, { kind: "component", type: Button, selector: "p-button", inputs: ["hostName", "type", "badge", "disabled", "raised", "rounded", "text", "plain", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "iconPos", "icon", "label", "loading", "loadingIcon", "severity", "buttonProps", "fluid"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: SharedModule }], animations: [
            trigger('animation', [
                state('void', style$1({
                    opacity: 0
                })),
                state('open', style$1({
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => void', animate('{{hideTransitionParams}}'))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTop, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-scrollTop, p-scrolltop, p-scroll-top',
                    standalone: true,
                    imports: [CommonModule, ChevronUpIcon, Button, SharedModule],
                    template: `
        <p-button
            *ngIf="visible"
            [@animation]="{
                value: 'open',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            (click)="onClick()"
            [pt]="ptm('pcButton')"
            [styleClass]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            type="button"
            [buttonProps]="buttonProps"
        >
            <ng-template #icon>
                <ng-container *ngIf="!iconTemplate && !_iconTemplate">
                    <span *ngIf="_icon" [class]="cn(cx('icon'), _icon)"></span>
                    <svg data-p-icon="chevron-up" *ngIf="!_icon" [class]="cx('icon')" />
                </ng-container>
                <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { styleClass: cx('icon') }"></ng-template>
            </ng-template>
        </p-button>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [
                        trigger('animation', [
                            state('void', style$1({
                                opacity: 0
                            })),
                            state('open', style$1({
                                opacity: 1
                            })),
                            transition('void => open', animate('{{showTransitionParams}}')),
                            transition('open => void', animate('{{hideTransitionParams}}'))
                        ])
                    ],
                    providers: [ScrollTopStyle, { provide: SCROLLTOP_INSTANCE, useExisting: ScrollTop }, { provide: PARENT_INSTANCE, useExisting: ScrollTop }],
                    hostDirectives: [Bind]
                }]
        }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], target: [{
                type: Input
            }], threshold: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], icon: [{
                type: Input
            }], behavior: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], buttonAriaLabel: [{
                type: Input
            }], buttonProps: [{
                type: Input
            }], iconTemplate: [{
                type: ContentChild,
                args: ['icon', { descendants: false }]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class ScrollTopModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopModule, imports: [ScrollTop, SharedModule], exports: [ScrollTop, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopModule, imports: [ScrollTop, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ScrollTopModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ScrollTop, SharedModule],
                    exports: [ScrollTop, SharedModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ScrollTop, ScrollTopClasses, ScrollTopModule, ScrollTopStyle };
//# sourceMappingURL=primeng-scrolltop.mjs.map
