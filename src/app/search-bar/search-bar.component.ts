import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchSelection } from '../data-models/search-selections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { startWith, map, combineLatest } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../data-models/user';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  SearchSelection = SearchSelection;
  searchByOptions = SearchSelection.getKeyValuePairs();

  searchControl: FormControl = new FormControl();
  searchByControl: FormControl = new FormControl();

  searchTermsSubscription: Subscription;

  @Output() searchTerms = new EventEmitter<Function[]>();

  constructor() {}

  ngOnInit() {
    const searchFilter = this.searchControl.valueChanges.pipe(
      startWith<string>(''),
      map(value => (value ? value : '')),
    );
    const searchByFilter = this.searchByControl.valueChanges.pipe(
      startWith<number[]>([]),
      map(value => (value ? value : [])),
    );
    this.searchTermsSubscription = searchFilter
      .pipe(
        combineLatest(searchByFilter),
        map(next => {
          const filterFuncs: Function[] = [];
          const searchValue = next['0'].toLowerCase();
          if (searchValue) {
            next['1'].forEach(value => {
              filterFuncs.push((data: User[]) => {
                return data.filter(user =>
                  user[SearchSelection.mapToUserProperties(value)]
                    .toString()
                    .toLowerCase()
                    .includes(searchValue),
                );
              });
            });
          }
          return filterFuncs;
        }),
      )
      .subscribe(funcs => {
        this.searchTerms.emit(funcs);
      });
    this.searchByControl.setValue([2, 3]);
  }
  ngOnDestroy() {
    if (this.searchTermsSubscription) {
      this.searchTermsSubscription.unsubscribe();
    }
  }
}
