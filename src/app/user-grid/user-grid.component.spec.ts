import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridComponent } from './user-grid.component';
import { User } from '../data-models/user';

const TEST_USERS: User[] = [
  {
    id: 393887,
    email: 'famousfranko@gmail.com',
    fname: 'Frank',
    lname: 'Nielsen',
    isCompany: false,
    company: '',
    created: new Date('2017-11-18 00:00:00')
  },
  {
    id: 394970,
    email: 'businessopp4you@gmail.com',
    fname: 'Shelia',
    lname: 'Smith1',
    isCompany: false,
    company: '',
    created: new Date('2017-11-18 00:00:00')
  },
];

describe('UserGridComponent', () => {
  let component: UserGridComponent;
  let fixture: ComponentFixture<UserGridComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserGridComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(
    'should render a table',
    async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table')).toBeTruthy();
    })
  );
  it(
    'should render a table header with titles [ID, Email, First Name, Last Name, Is a Company, Company Name, Created]',
    async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const thArray = Array.from(compiled.querySelectorAll('th').values());
      // Breaking usual 'Best Practices' of one expect per a test:
      // This test is testing the column headers and the column headers are a single unit.
      // Taking multiple expect calls tests the headers by value thoroughly to give a single unit to test
      // and good error messages upon failure
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'ID' }));
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'Email' }));
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'First Name' }));
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'Last Name' }));
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'Is a Company' }));
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'Company Name' }));
      expect(thArray).toContain(jasmine.objectContaining({ innerText: 'Created' }));
    })
  );
  it(`should have an array of two users from input`, async(() => {
    const userGrid = fixture.debugElement.componentInstance;
    userGrid.users = TEST_USERS;
    expect(userGrid.users.length).toBe(2);
  }));
});

