// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// tslint:disable:ordered-imports
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
// tslint:enable:ordered-imports

import { getTestBed } from '@angular/core/testing';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
const context = require.context('./', true, /\/(app|lib)\/.*\.ts$/);
// And load the modules.
context.keys().map(context);