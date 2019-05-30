import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {
 
  AlertController,
  ToastController,
 
 
} from "@ionic/angular";
import { EvenementService,Evenement} from "src/app/services/evenement.service";
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  private evenement: Evenement[] = [];
  listUsers;

  constructor(
  private evenementService: EvenementService,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController
) { }

ngOnInit() {
  this.evenementService.getEvenement().subscribe(sub => {
    console.log(sub);
    this.evenement = sub;
  });
  console.log(this.evenement)
}
filterItems(ev: any) {
  //debugger;
  let val = ev.target.value;

  if (val && val.trim() !=='') {
    console.log("Vallll", val);
     this.evenementService.getFilteredEvenement(Number(val)).subscribe(sub => {
      this.evenement = sub;
    });

  } else {
    this.evenementService.getEvenement().subscribe(sub => {
      console.log(sub);
      this.evenement = sub;
    });
  }
}
}
