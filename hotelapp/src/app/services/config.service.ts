import { Inject, Injectable } from '@angular/core';
import { routeConfigs } from './routerconfig-services';
import { RouteConfigs } from './routerConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(routeConfigs) private configToken: RouteConfigs) {
    
    console.log('configServices initialized')

     console.log(configToken)
  }


}
