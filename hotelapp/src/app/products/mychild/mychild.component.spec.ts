import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychildComponent } from './mychild.component';

describe('MychildComponent', () => {
  let component: MychildComponent;
  let fixture: ComponentFixture<MychildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MychildComponent]
    });
    fixture = TestBed.createComponent(MychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
