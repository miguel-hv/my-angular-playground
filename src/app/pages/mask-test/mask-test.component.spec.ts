import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskTestComponent } from './mask-test.component';

describe('MaskTestComponent', () => {
  let component: MaskTestComponent;
  let fixture: ComponentFixture<MaskTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
