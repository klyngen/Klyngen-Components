import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTextComponentComponent } from './basic-text-component.component';

describe('BasicTextComponentComponent', () => {
  let component: BasicTextComponentComponent;
  let fixture: ComponentFixture<BasicTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTextComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
