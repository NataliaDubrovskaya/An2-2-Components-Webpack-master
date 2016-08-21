/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TodoAppHeaderComponent } from './todo-app-header.component';

describe('Component: TodoAppHeader', () => {
  it('should create an instance', () => {
    let component = new TodoAppHeaderComponent();
    expect(component).toBeTruthy();
  });
});
