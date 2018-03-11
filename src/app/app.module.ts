import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [AppComponent, UserGridComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
