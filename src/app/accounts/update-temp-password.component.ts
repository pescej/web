import { Component } from '@angular/core';

import { ActiveAccountService } from 'jslib-common/abstractions/activeAccount.service';
import { ApiService } from 'jslib-common/abstractions/api.service';
import { CryptoService } from 'jslib-common/abstractions/crypto.service';
import { I18nService } from 'jslib-common/abstractions/i18n.service';
import { MessagingService } from 'jslib-common/abstractions/messaging.service';
import { PasswordGenerationService } from 'jslib-common/abstractions/passwordGeneration.service';
import { PlatformUtilsService } from 'jslib-common/abstractions/platformUtils.service';
import { PolicyService } from 'jslib-common/abstractions/policy.service';

import { UpdateTempPasswordComponent as BaseUpdateTempPasswordComponent } from 'jslib-angular/components/update-temp-password.component';

@Component({
    selector: 'app-update-temp-password',
    templateUrl: 'update-temp-password.component.html',
})

export class UpdateTempPasswordComponent extends BaseUpdateTempPasswordComponent {
    constructor(i18nService: I18nService, platformUtilsService: PlatformUtilsService,
        passwordGenerationService: PasswordGenerationService, policyService: PolicyService,
        cryptoService: CryptoService, messagingService: MessagingService,
        apiService: ApiService, activeAccount: ActiveAccountService) {
        super(i18nService, platformUtilsService, passwordGenerationService, policyService, cryptoService,
            messagingService, apiService, activeAccount);
    }
}
