import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TopNavComponent } from './layout/top-nav/top-nav.component';

import { VolunteersComponent } from './volunteers/volunteers.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewVolunteerComponent } from './volunteers/view-volunteer/view-volunteer.component';
import { ViewMainComponent } from './layout/mainPage/view-main/view-main.component';
import { LoginReactiveFormsComponent } from './login/login-reactive-forms/login-reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { ViewTasksComponent } from './tasks/view-tasks/view-tasks.component';
import { AllTasksComponent } from './tasks/all-tasks/all-tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    VolunteersComponent,
    ViewVolunteerComponent,
    ViewMainComponent,
    LoginReactiveFormsComponent,
    AboutUsComponent,
    RegisterUserComponent,
    ViewTasksComponent,
    AllTasksComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

MatAutocompleteModule,
MatCheckboxModule,
MatDatepickerModule,
MatNativeDateModule,
MatFormFieldModule,
MatInputModule,
MatRadioModule,
MatSelectModule,
MatSliderModule,
MatSlideToggleModule,
MatMenuModule,
MatSidenavModule,
MatToolbarModule,
MatCardModule,
MatDividerModule,
MatExpansionModule,
MatGridListModule,
MatListModule,
MatStepperModule,
MatTabsModule,
MatTreeModule,
MatButtonModule,
MatButtonToggleModule,
MatBadgeModule,
MatChipsModule,
MatIconModule,
MatProgressSpinnerModule,
MatProgressBarModule,
MatRippleModule,
MatBottomSheetModule,
MatDialogModule,
MatSnackBarModule,
MatTooltipModule,
MatPaginatorModule,
MatSortModule,
MatTableModule,
HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
