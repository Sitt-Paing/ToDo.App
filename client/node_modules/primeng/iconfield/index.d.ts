import * as i0 from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { IconFieldPassThrough } from 'primeng/types/iconfield';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';

/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primeng.org/iconfield/)
 *
 * @module iconfieldstyle
 *
 */
declare enum IconFieldClasses {
    /**
     * Class name of the root element
     */
    root = "p-iconfield"
}
declare class IconFieldStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-iconfield-left': boolean;
            'p-iconfield-right': boolean;
        })[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFieldStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconFieldStyle>;
}
interface IconFieldStyle extends BaseStyle {
}

/**
 * IconField wraps an input and an icon.
 * @group Components
 */
declare class IconField extends BaseComponent<IconFieldPassThrough> implements AfterViewChecked {
    hostName: any;
    _componentStyle: IconFieldStyle;
    $pcIconField: IconField | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    /**
     * Position of the icon.
     * @group Props
     */
    iconPosition: 'right' | 'left';
    /**
     * Style class of the component.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconField, "p-iconfield, p-iconField, p-icon-field", never, { "hostName": { "alias": "hostName"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class IconFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IconFieldModule, never, [typeof IconField], [typeof IconField]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IconFieldModule>;
}

export { IconField, IconFieldClasses, IconFieldModule, IconFieldStyle };
