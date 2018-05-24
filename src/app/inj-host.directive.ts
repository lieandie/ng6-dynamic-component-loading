import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInjHost]'
})
export class InjHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
