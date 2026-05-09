import { trigger, transition, style as style$1, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, EventEmitter, signal, booleanAttribute, ContentChildren, ContentChild, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { TimesIcon } from 'primeng/icons';
import { Ripple } from 'primeng/ripple';
import { style } from '@primeuix/styles/message';
import { BaseStyle } from 'primeng/base';

const classes = {
    root: ({ instance }) => ['p-message p-component p-message-' + instance.severity, 'p-message-' + instance.variant, { 'p-message-sm': instance.size === 'small', 'p-message-lg': instance.size === 'large' }],
    content: 'p-message-content',
    icon: 'p-message-icon',
    text: 'p-message-text',
    closeButton: 'p-message-close-button',
    closeIcon: 'p-message-close-icon'
};
class MessageStyle extends BaseStyle {
    name = 'message';
    style = style;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: MessageStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: MessageStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: MessageStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Message groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primeng.org/message/)
 *
 * @module messagestyle
 *
 */
var MessageClasses;
(function (MessageClasses) {
    /**
     * Class name of the root element
     */
    MessageClasses["root"] = "p-message";
    /**
     * Class name of the content element
     */
    MessageClasses["content"] = "p-message-content";
    /**
     * Class name of the icon element
     */
    MessageClasses["icon"] = "p-message-icon";
    /**
     * Class name of the text element
     */
    MessageClasses["text"] = "p-message-text";
    /**
     * Class name of the close button element
     */
    MessageClasses["closeButton"] = "p-message-close-button";
    /**
     * Class name of the close icon element
     */
    MessageClasses["closeIcon"] = "p-message-close-icon";
})(MessageClasses || (MessageClasses = {}));

const MESSAGE_INSTANCE = new InjectionToken('MESSAGE_INSTANCE');
/**
 * Message groups a collection of contents in tabs.
 * @group Components
 */
class Message extends BaseComponent {
    _componentStyle = inject(MessageStyle);
    bindDirectiveInstance = inject(Bind, { self: true });
    $pcMessage = inject(MESSAGE_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;
    onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm('host'));
    }
    /**
     * Severity level of the message.
     * @defaultValue 'info'
     * @group Props
     */
    severity = 'info';
    /**
     * Text content.
     * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
     * @group Props
     */
    text;
    /**
     * Whether displaying messages would be escaped or not.
     * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
     * @group Props
     */
    escape = true;
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
     * Whether the message can be closed manually using the close icon.
     * @group Props
     * @defaultValue false
     */
    closable = false;
    /**
     * Icon to display in the message.
     * @group Props
     * @defaultValue undefined
     */
    icon;
    /**
     * Icon to display in the message close button.
     * @group Props
     * @defaultValue undefined
     */
    closeIcon;
    /**
     * Delay in milliseconds to close the message automatically.
     * @defaultValue undefined
     */
    life;
    /**
     * Transition options of the show animation.
     * @defaultValue '300ms ease-out'
     * @group Props
     */
    showTransitionOptions = '300ms ease-out';
    /**
     * Transition options of the hide animation.
     * @defaultValue '200ms cubic-bezier(0.86, 0, 0.07, 1)'
     * @group Props
     */
    hideTransitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Defines the size of the component.
     * @group Props
     */
    size;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant;
    /**
     * Emits when the message is closed.
     * @param {{ originalEvent: Event }} event - The event object containing the original event.
     * @group Emits
     */
    onClose = new EventEmitter();
    get closeAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    visible = signal(true, ...(ngDevMode ? [{ debugName: "visible" }] : []));
    /**
     * Custom template of the message container.
     * @group Templates
     */
    containerTemplate;
    /**
     * Custom template of the message icon.
     * @group Templates
     */
    iconTemplate;
    /**
     * Custom template of the close icon.
     * @group Templates
     */
    closeIconTemplate;
    templates;
    _containerTemplate;
    _iconTemplate;
    _closeIconTemplate;
    closeCallback = (event) => {
        this.close(event);
    };
    onInit() {
        if (this.life) {
            setTimeout(() => {
                this.visible.set(false);
            }, this.life);
        }
    }
    onAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'container':
                    this._containerTemplate = item.template;
                    break;
                case 'icon':
                    this._iconTemplate = item.template;
                    break;
                case 'closeicon':
                    this._closeIconTemplate = item.template;
                    break;
            }
        });
    }
    /**
     * Closes the message.
     * @param {Event} event - Browser event.
     * @group Method
     */
    close(event) {
        this.visible.set(false);
        this.onClose.emit({ originalEvent: event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Message, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: Message, isStandalone: true, selector: "p-message", inputs: { severity: "severity", text: "text", escape: ["escape", "escape", booleanAttribute], style: "style", styleClass: "styleClass", closable: ["closable", "closable", booleanAttribute], icon: "icon", closeIcon: "closeIcon", life: "life", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", size: "size", variant: "variant" }, outputs: { onClose: "onClose" }, providers: [MessageStyle, { provide: MESSAGE_INSTANCE, useExisting: Message }, { provide: PARENT_INSTANCE, useExisting: Message }], queries: [{ propertyName: "containerTemplate", first: true, predicate: ["container"] }, { propertyName: "iconTemplate", first: true, predicate: ["icon"] }, { propertyName: "closeIconTemplate", first: true, predicate: ["closeicon"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: i1.Bind }], ngImport: i0, template: `
        @if (visible()) {
            <div
                [pBind]="ptm('root')"
                [attr.aria-live]="'polite'"
                [class]="cn(cx('root'), styleClass)"
                [attr.role]="'alert'"
                [@messageAnimation]="{
                    value: 'visible()',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions
                    }
                }"
            >
                <div [pBind]="ptm('content')" [class]="cx('content')">
                    @if (iconTemplate || _iconTemplate) {
                        <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-container>
                    }
                    @if (icon) {
                        <i [pBind]="ptm('icon')" [class]="cn(cx('icon'), icon)"></i>
                    }

                    @if (containerTemplate || _containerTemplate) {
                        <ng-container *ngTemplateOutlet="containerTemplate || _containerTemplate; context: { closeCallback: closeCallback }"></ng-container>
                    } @else {
                        <div *ngIf="!escape; else escapeOut">
                            <span [pBind]="ptm('text')" *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text"></span>
                        </div>

                        <ng-template #escapeOut>
                            <span [pBind]="ptm('text')" *ngIf="escape && text" [ngClass]="cx('text')">{{ text }}</span>
                        </ng-template>

                        <span [pBind]="ptm('text')" [ngClass]="cx('text')">
                            <ng-content></ng-content>
                        </span>
                    }
                    @if (closable) {
                        <button [pBind]="ptm('closeButton')" pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel">
                            @if (closeIcon) {
                                <i [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), closeIcon)" [ngClass]="closeIcon"></i>
                            }
                            @if (closeIconTemplate || _closeIconTemplate) {
                                <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                            }
                            @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                                <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" />
                            }
                        </button>
                    }
                </div>
            </div>
        }
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TimesIcon, selector: "[data-p-icon=\"times\"]" }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [
            trigger('messageAnimation', [
                transition(':enter', [style$1({ opacity: 0, transform: 'translateY(-25%)' }), animate('{{showTransitionParams}}')]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style$1({
                        height: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        opacity: 0
                    }))
                ])
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: Message, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-message',
                    standalone: true,
                    imports: [CommonModule, TimesIcon, Ripple, SharedModule, Bind],
                    template: `
        @if (visible()) {
            <div
                [pBind]="ptm('root')"
                [attr.aria-live]="'polite'"
                [class]="cn(cx('root'), styleClass)"
                [attr.role]="'alert'"
                [@messageAnimation]="{
                    value: 'visible()',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions
                    }
                }"
            >
                <div [pBind]="ptm('content')" [class]="cx('content')">
                    @if (iconTemplate || _iconTemplate) {
                        <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-container>
                    }
                    @if (icon) {
                        <i [pBind]="ptm('icon')" [class]="cn(cx('icon'), icon)"></i>
                    }

                    @if (containerTemplate || _containerTemplate) {
                        <ng-container *ngTemplateOutlet="containerTemplate || _containerTemplate; context: { closeCallback: closeCallback }"></ng-container>
                    } @else {
                        <div *ngIf="!escape; else escapeOut">
                            <span [pBind]="ptm('text')" *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text"></span>
                        </div>

                        <ng-template #escapeOut>
                            <span [pBind]="ptm('text')" *ngIf="escape && text" [ngClass]="cx('text')">{{ text }}</span>
                        </ng-template>

                        <span [pBind]="ptm('text')" [ngClass]="cx('text')">
                            <ng-content></ng-content>
                        </span>
                    }
                    @if (closable) {
                        <button [pBind]="ptm('closeButton')" pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel">
                            @if (closeIcon) {
                                <i [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), closeIcon)" [ngClass]="closeIcon"></i>
                            }
                            @if (closeIconTemplate || _closeIconTemplate) {
                                <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                            }
                            @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                                <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" />
                            }
                        </button>
                    }
                </div>
            </div>
        }
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [MessageStyle, { provide: MESSAGE_INSTANCE, useExisting: Message }, { provide: PARENT_INSTANCE, useExisting: Message }],
                    hostDirectives: [Bind],
                    animations: [
                        trigger('messageAnimation', [
                            transition(':enter', [style$1({ opacity: 0, transform: 'translateY(-25%)' }), animate('{{showTransitionParams}}')]),
                            transition(':leave', [
                                animate('{{hideTransitionParams}}', style$1({
                                    height: 0,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    opacity: 0
                                }))
                            ])
                        ])
                    ]
                }]
        }], propDecorators: { severity: [{
                type: Input
            }], text: [{
                type: Input
            }], escape: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], closable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], icon: [{
                type: Input
            }], closeIcon: [{
                type: Input
            }], life: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], onClose: [{
                type: Output
            }], containerTemplate: [{
                type: ContentChild,
                args: ['container', { descendants: false }]
            }], iconTemplate: [{
                type: ContentChild,
                args: ['icon', { descendants: false }]
            }], closeIconTemplate: [{
                type: ContentChild,
                args: ['closeicon', { descendants: false }]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class MessageModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: MessageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: MessageModule, imports: [Message, SharedModule], exports: [Message, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: MessageModule, imports: [Message, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: MessageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Message, SharedModule],
                    exports: [Message, SharedModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Message, MessageClasses, MessageModule, MessageStyle };
//# sourceMappingURL=primeng-message.mjs.map
