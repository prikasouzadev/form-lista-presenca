import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceForm } from './presence-form';

describe('PresenceForm', () => {
  let component: PresenceForm;
  let fixture: ComponentFixture<PresenceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenceForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PresenceForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
