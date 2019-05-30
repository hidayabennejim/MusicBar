import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'

@Injectable()
export class AuthService implements CanActivate {
	doFacebookLogin(): any {
		throw new Error("Method not implemented.");
	}

	constructor(private router: Router, private user: UserService) {

	}

	async canActivate(router) {
		if(await this.user.isAuthenticated()) {
			return true
		}

		this.router.navigate(['/login'])
		return false
	}
}