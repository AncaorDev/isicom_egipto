import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIconComponent } from './components/custom-icon/custom-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { PortalModule } from '@angular/cdk/portal';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { MatButtonModule } from '@angular/material';
import { SafePipe } from '../app.pipe';

@NgModule({
    declarations: [
        CustomIconComponent,
        ModalMessageComponent,
        SafePipe
    ],
    imports: [
        CommonModule,
        MatIconModule,
        PortalModule,
        MatButtonModule
    ],
    entryComponents : [ModalMessageComponent],
    exports: [CustomIconComponent, PortalModule, ModalMessageComponent, SafePipe],
    providers : []
})

export class SharedModule {

}

