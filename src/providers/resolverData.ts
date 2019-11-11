
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserAuthService } from './User.Auth.Service';
 
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {
 
  constructor(private dataService: UserAuthService) { }
 
  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('key');
    return this.dataService.getData(id);
  }
}