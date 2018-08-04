import { NgModule } from '@angular/core';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200/api'
};


@NgModule({})
export class EnvironmentModule {
    constructor() {
        const data = require('./environment.json');
        if (data.url) {
            environment.apiUrl = data.url;
        }
    }
}
