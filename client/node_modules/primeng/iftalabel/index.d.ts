import * as i0 from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import { IftaLabelPassThrough } from 'primeng/types/iftalabel';
import { BaseStyle } from 'primeng/base';
import * as i2 from '@angular/common';
import * as i3 from 'primeng/api';
import * as i4 from '@angular/router';

/**
 *
 * IftaLabel visually integrates a label within its form element.
 *
 * [Live Demo](https://www.primeng.org/iftalabel/)
 *
 * @module iftalabelstyle
 *
 */
declare enum IftaLabelClasses {
    /**
     * Class name of the root element
     */
    root = "p-iftalabel"
}
declare class IftaLabelStyle extends BaseStyle {
    name: string;
    style: string;
    classes: {
        root: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<IftaLabelStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IftaLabelStyle>;
}
interface IftaLabelStyle extends BaseStyle {
}

/**
 * IftaLabel is used to create infield top aligned labels.
 * @group Components
 */
declare class IftaLabel extends BaseComponent<IftaLabelPassThrough> implements AfterViewChecked {
    _componentStyle: IftaLabelStyle;
    $pcIftaLabel: IftaLabel | undefined;
    bindDirectiveInstance: Bind;
    onAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IftaLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IftaLabel, "p-iftalabel, p-iftaLabel, p-ifta-label", never, {}, {}, never, ["*"], true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class IftaLabelModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IftaLabelModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IftaLabelModule, never, [typeof IftaLabel, typeof i2.CommonModule, typeof i3.SharedModule, typeof i4.RouterModule], [typeof IftaLabel, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IftaLabelModule>;
}

export { IftaLabel, IftaLabelClasses, IftaLabelModule, IftaLabelStyle };
