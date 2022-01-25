import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { C01LifecycleComponent } from './demo/c01-lifecycle/c01-lifecycle.component';
import { C02TextInterpolationComponent } from './demo/c02-text-interpolation/c02-text-interpolation.component';
import { C00HelloWorldComponent } from './demo/c00-hello-world/c00-hello-world.component';
import { C0301ChildComponent } from './demo/C03-ComponentsCommunication/c0301-child/c0301-child.component';
import { C0301ParentComponent } from './demo/C03-ComponentsCommunication/c0301-parent/c0301-parent.component';
import { C0302ChildComponent } from './demo/C03-ComponentsCommunication/c0302-child/c0302-child.component';
import { C0302ParentComponent } from './demo/C03-ComponentsCommunication/c0302-parent/c0302-parent.component';
import { C04ChildComponent } from './demo/c04-ComponentStyles/c04-child/c04-child.component';
import { C04ParentComponent } from './demo/c04-ComponentStyles/c04-parent/c04-parent.component';
import { C05ChildComponent } from './demo/c05-NgContent/c05-child/c05-child.component';
import { C05ParentComponent } from './demo/c05-NgContent/c05-parent/c05-parent.component';
import { C06TemplateStatementsComponent } from './demo/c06-template-statements/c06-template-statements.component';
import { C0701PipesComponent } from './demo/c07-Pipes/c0701-pipes/c0701-pipes.component';
import { C0702GreetingPipePipe } from './demo/c07-Pipes/c0702-greeting-pipe.pipe';
import { C08PropertyBindingComponent } from './demo/c08-property-binding/c08-property-binding.component';
import { C09AttributeClassStyleComponent } from './demo/c09-attribute-class-style/c09-attribute-class-style.component';
import { C10ChildComponent } from './demo/c10-EventBinding/c10-child/c10-child.component';
import { C10ParentComponent } from './demo/c10-EventBinding/c10-parent/c10-parent.component';
import { C11ChildComponent } from './demo/c11-TwoWayBinding/c11-child/c11-child.component';
import { C11ParentComponent } from './demo/c11-TwoWayBinding/c11-parent/c11-parent.component';
import { C12DirectivesComponent } from './demo/c12-directives/c12-directives.component';
import { C13AttributeDirectivesComponent } from './demo/c13-attribute-directives/c13-attribute-directives.component';
import { HighlightDirective } from './demo/c13-attribute-directives/c13-highlight.directive';
import { C14StructuralDirectivesComponent } from './demo/c14-structural-directives/c14-structural-directives.component';
import { C15DepnedencyInjectionComponent } from './demo/c15-depnedency-injection/c15-depnedency-injection.component';
import { LogService } from './demo/c15-depnedency-injection/c15-log.service';
import { C16FirstComponent } from './demo/c16-routing/c16-first/c16-first.component';
import { C16SecondComponent } from './demo/c16-routing/c16-second/c16-second.component';
import { C16MainComponent } from './demo/c16-routing/c16-main/c16-main.component';
import { AppRoutringModule } from './demo/c16-routing/c16-routing.module';
import { C16ChildAComponent } from './demo/c16-routing/c16-child-a/c16-child-a.component';
import { C16ChildBComponent } from './demo/c16-routing/c16-child-b/c16-child-b.component';
import { C17TemplateDrivenFormComponent } from './demo/c17-template-driven-form/c17-template-driven-form.component';
import { C18ReactiveForms1Component } from './demo/c18-ReactiveForms/c18-reactive-forms1/c18-reactive-forms1.component';
import { C18ReactiveForms2Component } from './demo/c18-ReactiveForms/c18-reactive-forms2/c18-reactive-forms2.component';
import { C19FormValidationComponent } from './demo/c19-form-validation/c19-form-validation.component';
import { C20HttpClientComponent } from './demo/c20-http-client/c20-http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    C01LifecycleComponent,
    C02TextInterpolationComponent,
    C00HelloWorldComponent,
    C0301ChildComponent,
    C0301ParentComponent,
    C0302ChildComponent,
    C0302ParentComponent,
    C04ChildComponent,
    C04ParentComponent,
    C05ChildComponent,
    C05ParentComponent,
    C06TemplateStatementsComponent,
    C0701PipesComponent,
    C0702GreetingPipePipe,
    C08PropertyBindingComponent,
    C09AttributeClassStyleComponent,
    C10ChildComponent,
    C10ParentComponent,
    C11ChildComponent,
    C11ParentComponent,
    C12DirectivesComponent,
    C13AttributeDirectivesComponent,
    HighlightDirective,
    C14StructuralDirectivesComponent,
    C15DepnedencyInjectionComponent,
    C16FirstComponent,
    C16SecondComponent,
    C16MainComponent,
    C16ChildAComponent,
    C16ChildBComponent,
    C17TemplateDrivenFormComponent,
    C18ReactiveForms1Component,
    C18ReactiveForms2Component,
    C19FormValidationComponent,
    C20HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutringModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
