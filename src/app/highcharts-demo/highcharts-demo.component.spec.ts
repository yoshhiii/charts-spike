import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsDemoComponent } from './highcharts-demo.component';

describe('HighchartsDemoComponent', () => {
  let component: HighchartsDemoComponent;
  let fixture: ComponentFixture<HighchartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
