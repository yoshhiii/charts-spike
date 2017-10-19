import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DemoComponent } from './d3-demo.component';

describe('D3DemoComponent', () => {
  let component: D3DemoComponent;
  let fixture: ComponentFixture<D3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
