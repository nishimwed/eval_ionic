import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PregrancyPage } from './pregrancy.page';

describe('PregrancyPage', () => {
  let component: PregrancyPage;
  let fixture: ComponentFixture<PregrancyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PregrancyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
