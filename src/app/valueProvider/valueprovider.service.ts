import { InjectionToken } from "@angular/core";
import { IConfig } from './ivalueprovider';

export const CONFIG_SERVICE =
  new InjectionToken<IConfig>('value provider');

export const CONFIG_VALUE: IConfig = {
  apiEndPoint: 'abc.com',
  pageSize: 10
};
