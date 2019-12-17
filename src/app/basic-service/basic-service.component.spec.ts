import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicServiceComponent } from './basic-service.component';

describe('BasicServiceComponent', () => {
  let component: BasicServiceComponent;
  let fixture: ComponentFixture<BasicServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
