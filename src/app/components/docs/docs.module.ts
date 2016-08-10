import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';

import { docsRoutes } from './docs.routes';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview/overview.component';
import { CreatingComponent } from './creating/creating.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { Angular2Component } from './angular-2/angular-2.component';
import { BuildTasksComponent } from './build-tasks/build-tasks.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { IconsComponent } from './icons/icons.component';
import { TestingComponent } from './testing/testing.component';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentFileModule } from '../../../platform/file-upload';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';

@NgModule({
  declarations: [
    DocsComponent,
    DocsOverviewComponent,
    CreatingComponent,
    AngularMaterialComponent,
    Angular2Component,
    BuildTasksComponent,
    DeploymentComponent,
    IconsComponent,
    TestingComponent,
  ],
  imports: [
    JsonpModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    docsRoutes,
  ],
})
export class DocsModule {}
