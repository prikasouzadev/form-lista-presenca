import { Injectable, computed, signal } from '@angular/core';
import { IPresenceItem } from '../interfaces/presence-tem.interface';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  private readonly storageKey = 'presence-list';

  readonly entries = signal<IPresenceItem[]>([]);
  readonly loading = signal(false);
  readonly modalOpen = signal(false);
  readonly modalMessage = signal('');

  readonly hasEntries = computed(() => this.entries().length > 0);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return;

    try {
      const parsed: IPresenceItem[] = JSON.parse(data);
      this.entries.set(parsed);
    } catch {
      this.entries.set([]);
    }
  }

  private persist(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.entries()));
  }

  private simulateApi<T>(callback: () => T): Promise<T> {
    this.loading.set(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const result = callback();
        this.loading.set(false);
        resolve(result);
      }, 10000);
    });
  }

  async addEntry(payload: { name: string; email: string }): Promise<void> {
    await this.simulateApi(() => {
      const newEntry: IPresenceItem = {
        id: crypto.randomUUID(),
        name: payload.name.trim(),
        email: payload.email.trim(),
        createdAt: new Date().toISOString(),
      };

      this.entries.update((current) => [newEntry, ...current]);
      this.persist();
    });

    this.openModal(`${payload.name}, seus dados foram inseridos na lista de presença`);

  }

  clearTable(): void {
  this.entries.set([]);
  this.persist();
}

  exportCSV(): void {
    const data = this.entries();
    if (!data.length) return;

    const headers = ['Nome', 'E-mail', 'Data'];
    const rows = data.map((item) => [
      item.name,
      item.email,
      new Date(item.createdAt).toLocaleString('pt-BR'),
    ]);

    const csvContent = [
      headers.join(';'),
      ...rows.map((row) => row.map((value) => `"${value}"`).join(';')),
    ].join('\n');

    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'lista-presenca.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  exportPDF(): void {
  const data = this.entries();
  if (!data.length) return;

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('Lista de Presença', 14, 15);

  autoTable(doc, {
    startY: 25,
    head: [['Nome', 'E-mail', 'Data']],
    body: data.map((item) => [
      item.name,
      item.email,
      new Date(item.createdAt).toLocaleString('pt-BR'),
    ]),
  });

  doc.save('lista-presenca.pdf');
}


  openModal(message: string): void {
    this.modalMessage.set(message);
    this.modalOpen.set(true);
  }

  closeModal(): void {
    this.modalOpen.set(false);
    this.modalMessage.set('');
  }
}
