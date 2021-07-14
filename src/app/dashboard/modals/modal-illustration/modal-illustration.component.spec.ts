import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIllustrationComponent } from './modal-illustration.component';

describe('ModalIllustrationComponent', () => {
  let component: ModalIllustrationComponent;
  let fixture: ComponentFixture<ModalIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
