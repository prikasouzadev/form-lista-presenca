import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PresenceService } from '../../services/presence.service';

@Component({
  selector: 'app-presence-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './presence-form.html',
  styleUrl: './presence-form.css',
})
export class PresenceForm {
  private readonly fb = inject(FormBuilder);
  readonly presenceService = inject(PresenceService);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),]],
  });

  isDisabled(): boolean {
    return this.presenceService.loading() || this.form.invalid;
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid || this.presenceService.loading()) {
      this.form.markAllAsTouched();
      return;
    }

    await this.presenceService.addEntry(this.form.getRawValue());
    this.form.reset();
  }

  get nameControl() {
    return this.form.controls.name;
  }

  get emailControl() {
    return this.form.controls.email;
  }
}
