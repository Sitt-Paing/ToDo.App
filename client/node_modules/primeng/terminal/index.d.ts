import { TerminalPassThrough } from 'primeng/types/terminal';
export * from 'primeng/types/terminal';
import * as i0 from '@angular/core';
import { AfterViewInit, AfterViewChecked, OnDestroy, ElementRef } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import * as i1 from 'primeng/bind';
import { Bind } from 'primeng/bind';
import * as rxjs from 'rxjs';
import { Subscription } from 'rxjs';
import * as _primeuix_styled from '@primeuix/styled';
import { BaseStyle } from 'primeng/base';
import * as i2 from 'primeng/api';

/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primeng.org/terminal)
 *
 * @module terminalstyle
 *
 */
declare enum TerminalClasses {
    /**
     * Class name of the root element
     */
    root = "p-terminal",
    /**
     * Class name of the welcome message element
     */
    welcomeMessage = "p-terminal-welcome-message",
    /**
     * Class name of the command list element
     */
    commandList = "p-terminal-command-list",
    /**
     * Class name of the command element
     */
    command = "p-terminal-command",
    /**
     * Class name of the command value element
     */
    commandValue = "p-terminal-command-value",
    /**
     * Class name of the command response element
     */
    commandResponse = "p-terminal-command-response",
    /**
     * Class name of the prompt element
     */
    prompt = "p-terminal-prompt",
    /**
     * Class name of the prompt label element
     */
    promptLabel = "p-terminal-prompt-label",
    /**
     * Class name of the prompt value element
     */
    promptValue = "p-terminal-prompt-value"
}
declare class TerminalStyle extends BaseStyle {
    name: string;
    style: _primeuix_styled.StyleType;
    classes: {
        root: () => string[];
        welcomeMessage: string;
        commandList: string;
        command: string;
        commandValue: string;
        commandResponse: string;
        prompt: string;
        promptLabel: string;
        promptValue: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<TerminalStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TerminalStyle>;
}
interface TerminalStyle extends BaseStyle {
}

declare class TerminalService {
    private commandSource;
    private responseSource;
    commandHandler: rxjs.Observable<string>;
    responseHandler: rxjs.Observable<string>;
    sendCommand(command: string): void;
    sendResponse(response: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TerminalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TerminalService>;
}

/**
 * Terminal is a text based user interface.
 * @group Components
 */
declare class Terminal extends BaseComponent<TerminalPassThrough> implements AfterViewInit, AfterViewChecked, OnDestroy {
    terminalService: TerminalService;
    $pcTerminal: Terminal | undefined;
    bindDirectiveInstance: Bind;
    /**
     * Initial text to display on terminal.
     * @group Props
     */
    welcomeMessage: string | undefined;
    /**
     * Prompt text for each command.
     * @group Props
     */
    prompt: string | undefined;
    /**
     * Style class of the component.
     * @deprecated since v20.0.0, use `class` instead.
     * @group Props
     */
    styleClass: string | undefined;
    commands: any[];
    command: string;
    container: Element;
    commandProcessed: boolean;
    subscription: Subscription;
    _componentStyle: TerminalStyle;
    inputRef: ElementRef<HTMLInputElement>;
    onHostClick(): void;
    constructor(terminalService: TerminalService);
    onAfterViewInit(): void;
    onAfterViewChecked(): void;
    set response(value: string);
    handleCommand(event: KeyboardEvent): void;
    focus(element: HTMLElement): void;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Terminal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Terminal, "p-terminal", never, { "welcomeMessage": { "alias": "welcomeMessage"; "required": false; }; "prompt": { "alias": "prompt"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "response": { "alias": "response"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.Bind; inputs: {}; outputs: {}; }]>;
}
declare class TerminalModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TerminalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TerminalModule, never, [typeof Terminal, typeof i2.SharedModule], [typeof Terminal, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TerminalModule>;
}

export { Terminal, TerminalClasses, TerminalModule, TerminalService, TerminalStyle };
