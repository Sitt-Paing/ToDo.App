import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { InputIconPassThrough } from 'primeng/types/inputicon';
import { BaseStyle } from 'primeng/base';
import * as i0 from '@angular/core';
import * as i2 from 'primeng/api';

declare class InputIconStyle extends BaseStyle {
    name: string;
    classes: {
        root: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<InputIconStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InputIconStyle>;
}

/**
 * InputIcon displays an icon.
 * @group Components
 */
declare class InputIcon extends BaseComponent<InputIconPassThrough> {
    hostName: any;
    /**
     * Style class of the element.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    _componentStyle: InputIconStyle;
    $pcInputIcon: InputIcon | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputIcon, "p-inputicon, p-inputIcon", never, { "hostName": { "alias": "hostName"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class InputIconModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputIconModule, never, [typeof InputIcon, typeof i2.SharedModule], [typeof InputIcon, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputIconModule>;
}

export { InputIcon, InputIconModule, InputIconStyle };
