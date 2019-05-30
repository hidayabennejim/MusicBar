import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {
 
  AlertController,
  ToastController,
 
 
} from "@ionic/angular";
import { EvenementService,Evenement} from "src/app/services/evenement.service";
@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.page.html',
  styleUrls: ['./liste-evenement.page.scss'],
})
export class ListeEvenementPage implements OnInit {

  private evenement: Observable<Evenement[]>;
  listUsers;

  constructor(
    private evenementService: EvenementService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.evenement = this.evenementService.getEvenement();
  }
  filterItems(ev: any) {
    //debugger;
    let val = ev.target.value;

    if (val && val.trim() !=='') {
      console.log("Vallll", val);
      this.evenement = this.evenementService.getFilteredEvenement(Number(val));
    } else {
      this.evenement = this.evenementService.getEvenement();
      console.log(" no Val");
    }
  }



}