import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrapesquisaComponent } from './barrapesquisa.component';

describe('BarrapesquisaComponent', () => {
  let component: BarrapesquisaComponent;
  let fixture: ComponentFixture<BarrapesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarrapesquisaComponent]
    });
    fixture = TestBed.createComponent(BarrapesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
