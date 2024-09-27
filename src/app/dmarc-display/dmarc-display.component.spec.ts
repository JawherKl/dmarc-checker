import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmarcDisplayComponent } from './dmarc-display.component';

describe('DmarcDisplayComponent', () => {
  let component: DmarcDisplayComponent;
  let fixture: ComponentFixture<DmarcDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmarcDisplayComponent]
    });
    fixture = TestBed.createComponent(DmarcDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
