import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2chartsDemoComponent } from './ng2charts-demo.component';

describe('Ng2chartsDemoComponent', () => {
  let component: Ng2chartsDemoComponent;
  let fixture: ComponentFixture<Ng2chartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2chartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2chartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
