# Age

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.


## Getting started

### Install via npm

```sh
npm i age-pipe
```

### Import the module
In your `AppModule`, import the `AgeModule`

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgeModule } from 'age-pipe';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    AgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Usage
<div>{{1992 | age}}</div>

# Note
Pass the age in number only