import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  email: string = ""
	password: string = ""
  cpassword: string = ""
  num: string = ""
  

	constructor(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
		) { }

	ngOnInit() {
	}


	async register() {
		const { username, password, cpassword } = this
		if(password !== cpassword) {
			this.showAlert("Error!", "Passwords don't match")
		return console.error("Passwords don't match")
		}
		
		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)
			console.log(res)
			this.showAlert("votre compte a été créé avec succès!", "vous etes parmis nous maintenant.")
		this.router.navigate(['/tabs'])
		}catch(error) {
			console.dir(error)
			this.showAlert("Error", error.message)
		}
	}

	async showAlert(header: string, message: string){
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ["Ok"]
		})
		await alert.present()
	}

	

}