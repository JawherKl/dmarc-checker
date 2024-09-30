import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainListDetailsComponent } from './domain-list-details.component';

describe('DomainListDetailsComponent', () => {
  let component: DomainListDetailsComponent;
  let fixture: ComponentFixture<DomainListDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomainListDetailsComponent]
    });
    fixture = TestBed.createComponent(DomainListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
