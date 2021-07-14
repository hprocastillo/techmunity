import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRepoComponent } from './modal-repo.component';

describe('ModalRepoComponent', () => {
  let component: ModalRepoComponent;
  let fixture: ComponentFixture<ModalRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
