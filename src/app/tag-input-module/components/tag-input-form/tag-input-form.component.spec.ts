import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TagInputFormComponent} from './tag-input-form.component';

describe('TagInputFormComponent', () => {
  let component: TagInputFormComponent;
  let fixture: ComponentFixture<TagInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagInputFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
