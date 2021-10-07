import {
    Component,
    OnInit,
} from '@angular/core';

import { AuditService } from 'jslib-common/abstractions/audit.service';
import { ActiveAccountService } from 'jslib-common/abstractions/activeAccount.service';
import { BreachAccountResponse } from 'jslib-common/models/response/breachAccountResponse';

@Component({
    selector: 'app-breach-report',
    templateUrl: 'breach-report.component.html',
})
export class BreachReportComponent implements OnInit {
    error = false;
    username: string;
    checkedUsername: string;
    breachedAccounts: BreachAccountResponse[] = [];
    formPromise: Promise<BreachAccountResponse[]>;

    constructor(private auditService: AuditService, private activeAccount: ActiveAccountService) { }

    async ngOnInit() {
        this.username = this.activeAccount.email;
    }

    async submit() {
        this.error = false;
        this.username = this.username.toLowerCase();
        try {
            this.formPromise = this.auditService.breachedAccounts(this.username);
            this.breachedAccounts = await this.formPromise;
        } catch {
            this.error = true;
        }
        this.checkedUsername = this.username;
    }
}
