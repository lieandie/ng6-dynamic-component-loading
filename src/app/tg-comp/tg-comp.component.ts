import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { InjHostDirective } from '../inj-host.directive';
import { InjCopmComponent } from '../inj-copm/inj-copm.component';

@Component({
  selector: 'app-tg-comp',
  templateUrl: './tg-comp.component.html',
  styleUrls: ['./tg-comp.component.css']
})
export class TgCompComponent implements OnInit {

  @ViewChild(InjHostDirective) host: InjHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.host);
  }

  spawn() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(InjCopmComponent);
    const componentRef =  this.host.viewContainerRef.createComponent(factory);
  }
}
