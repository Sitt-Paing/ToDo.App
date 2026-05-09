import { BlockUIPassThrough } from 'primeng/types/blockui';
export * from 'primeng/types/blockui';
import * as i0 from '@angular/core';
import { TemplateRef, QueryList } from '@angular/core';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

declare class BlockUiStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-blockui-mask-document': boolean;
        })[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUiStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BlockUiStyle>;
}
/**
 *
 * BlockUI represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primeng.org/blockui)
 *
 * @module blockuistyle
 *
 */
declare enum BlockUIClasses {
    /**
     * Class name of the root element
     */
    root = "p-blockui"
}
interface BlockUIStyle extends BaseStyle {
}

/**
 * BlockUI can either block other components or the whole page.
 * @group Components
 */
declare class BlockUI extends BaseComponent<BlockUIPassThrough> {
    $pcBlockUI: BlockUI | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Name of the local ng-template variable referring to another component.
     * @group Props
     */
    target: any;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex: boolean;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * Class of the element.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Current blocked state as a boolean.
     * @group Props
     */
    get blocked(): boolean;
    set blocked(val: boolean);
    /**
     * template of the content
     * @group Templates
     */
    contentTemplate: TemplateRef<any> | undefined;
    _blocked: boolean;
    animationEndListener: VoidFunction | null | undefined;
    _componentStyle: BlockUiStyle;
    constructor();
    onAfterViewInit(): void;
    _contentTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    onAfterContentInit(): void;
    block(): void;
    unblock(): void;
    destroyModal(): void;
    unbindAnimationEndListener(): void;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUI, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlockUI, "p-blockUI, p-blockui, p-block-ui", never, { "target": { "alias": "target"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "blocked": { "alias": "blocked"; "required": false; }; }, {}, ["contentTemplate", "templates"], ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_blocked: unknown;
}
declare class BlockUIModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUIModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BlockUIModule, never, [typeof BlockUI, typeof i2.SharedModule], [typeof BlockUI, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BlockUIModule>;
}

export { BlockUI, BlockUIClasses, BlockUIModule, BlockUiStyle };
export type { BlockUIStyle };
