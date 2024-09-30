import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainListTableComponent } from './domain-list-table.component';

describe('DomainListTableComponent', () => {
  let component: DomainListTableComponent;
  let fixture: ComponentFixture<DomainListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomainListTableComponent]
    });
    fixture = TestBed.createComponent(DomainListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
