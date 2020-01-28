import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu.SelectionComponent } from './menu.selection.component';

describe('Menu.SelectionComponent', () => {
  let component: Menu.SelectionComponent;
  let fixture: ComponentFixture<Menu.SelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu.SelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu.SelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
