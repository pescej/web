import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
} from '@angular/router';

import { ToasterService } from 'angular2-toaster';

import { I18nService } from 'jslib-common/abstractions/i18n.service';
import { OrganizationService } from 'jslib-common/abstractions/organization.service';

@Injectable()
export class OrganizationGuardService implements CanActivate {
    constructor(private organizationService: OrganizationService, private router: Router,
        private toasterService: ToasterService, private i18nService: I18nService) { }

    async canActivate(route: ActivatedRouteSnapshot) {
        const org = await this.organizationService.get(route.params.organizationId);
        if (org == null) {
            this.router.navigate(['/']);
            return false;
        }
        if (!org.isOwner && !org.enabled) {
            this.toasterService.popAsync('error', null, this.i18nService.t('organizationIsDisabled'));
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
