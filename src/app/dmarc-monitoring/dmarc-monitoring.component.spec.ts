import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmarcMonitoringComponent } from './dmarc-monitoring.component';

describe('DmarcMonitoringComponent', () => {
  let component: DmarcMonitoringComponent;
  let fixture: ComponentFixture<DmarcMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmarcMonitoringComponent]
    });
    fixture = TestBed.createComponent(DmarcMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
