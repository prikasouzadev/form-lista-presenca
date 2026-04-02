import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceTable } from './presence-table';

describe('PresenceTable', () => {
  let component: PresenceTable;
  let fixture: ComponentFixture<PresenceTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenceTable],
    }).compileComponents();

    fixture = TestBed.createComponent(PresenceTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
