import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';
var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SpinnerComponent],
                    imports: [CommonModule, HttpModule],
                    exports: [SpinnerComponent],
                    providers: [SpinnerService]
                },] },
    ];
    /** @nocollapse */
    SpinnerModule.ctorParameters = function () { return []; };
    return SpinnerModule;
}());
export { SpinnerModule };
//# sourceMappingURL=spinner.module.js.map