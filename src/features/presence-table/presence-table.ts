import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { PresenceService } from '../../services/presence.service';

@Component({
  selector: 'app-presence-table',
  imports: [CommonModule],
  templateUrl: './presence-table.html',
  styleUrl: './presence-table.css',
})
export class PresenceTable {
  readonly presenceService = inject(PresenceService);

  readonly canDownload = computed(
    () => this.presenceService.hasEntries() && !this.presenceService.loading()
  );

  readonly canClear = computed(
    () => this.presenceService.hasEntries() && !this.presenceService.loading()
  );

 clearTable(): void {
  if (!this.canClear()) return;
  this.presenceService.clearTable();
}

  downloadPdf(): void {
    if (!this.canDownload()) return;
    this.presenceService.exportPDF();
  }

  downloadCsv(): void {
    if (!this.canDownload()) return;
    this.presenceService.exportCSV();
  }
}
