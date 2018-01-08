import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConponentComponent } from './list-conponent.component';

describe('ListConponentComponent', () => {
  let component: ListConponentComponent;
  let fixture: ComponentFixture<ListConponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
