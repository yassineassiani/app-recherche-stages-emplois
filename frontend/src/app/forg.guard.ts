import { CanActivateFn } from '@angular/router';

export const forgGuard: CanActivateFn = (route, state) => {
  return true;
};
