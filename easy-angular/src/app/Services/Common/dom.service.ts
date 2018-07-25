import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {LoadingComponent} from '../../pages/common/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver
  , private  _appRef: ApplicationRef , private _injector: Injector) { }

  appendComponentToBody(component: any): any {
        const componentRef = this._componentFactoryResolver.resolveComponentFactory(component).create(this._injector);
        this._appRef.attachView(componentRef.hostView);
        const domMember = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domMember);
        return componentRef;
  }

  showLoading(title: string): any {
    const componentReferance = this.appendComponentToBody(LoadingComponent);
    const loadingComponent = componentReferance.instance as LoadingComponent;
  loadingComponent.initialize(title);
  }

  hideLoading(componentRef: any) {
    this._appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
