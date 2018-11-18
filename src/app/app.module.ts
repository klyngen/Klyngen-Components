import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { KlyngenDataTableModule } from './modules/klyngen-data-table/klyngen-data-table.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
      BrowserModule,
      KlyngenDataTableModule
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    data: ['en', 'to', 'tre', 'fire'];
}
