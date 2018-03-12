import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UsersService } from './users.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, UserGridComponent, SearchBarComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
