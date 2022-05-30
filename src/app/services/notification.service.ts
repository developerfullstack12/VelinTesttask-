import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItoastrOptions } from '../services/toastr/interfaces/itoastr-options'
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    constructor(
        private toastService: ToastrService,
    ) { }

    showError(message: string, title?: string, options?: ItoastrOptions): void {
        this.toastService.error(message, title ? `ERROR: ${title}` : 'ERROR', options);
    }

    showSuccessMessage(message: string, title?: string, options?: ItoastrOptions): void {
        this.toastService.success(message, title, options);
    }

    showWarn(message: string, title: string = 'Warning', options?: ItoastrOptions): void {
        this.toastService.warning(message, title, options);
    }

    showInfo(message: string, title: string = 'Information', options?: ItoastrOptions): void {
        this.toastService.info(message, title, options);
    }
}