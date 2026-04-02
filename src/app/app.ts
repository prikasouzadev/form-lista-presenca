import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresenceService } from '../services/presence.service';
import { PresenceForm } from "../features/presence-form/presence-form";
import { PresenceTable } from "../features/presence-table/presence-table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PresenceForm, PresenceTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly presenceService = inject(PresenceService);

}
