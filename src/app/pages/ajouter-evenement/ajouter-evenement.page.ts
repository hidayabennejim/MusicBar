import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EvenementService,Evenement} from "src/app/services/evenement.service";
import {
  NavController,
  LoadingController,
  ToastController
} from "@ionic/angular";
import 'rxjs/Rx'; 
@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.page.html',
  styleUrls: ['./ajouter-evenement.page.scss'],
  providers: []
})
export class AjouterEvenementPage implements OnInit {
 
   
  selectedFiles: FileList;
  currentUpload: Evenement;
  evenement: Evenement;
   
     constructor( private activatedRoute: ActivatedRoute,
      private evenementService: EvenementService,
      private router: Router,
       public navCtrl: NavController,
       public loadingCtrl: LoadingController,
       public toastCtrl: ToastController) { }
       id = null
     ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
   
     }
     detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Evenement(file);
    this.evenementService.pushUpload(this.currentUpload)
  }

  

     addEvenement() {
       this.evenementService.addEvenement(this.evenement).then(
         () => {
           this.router.navigateByUrl("/evenement");
         },
         err => console.log(err)
       );
     }
   
     ionViewWillEnter() {
      if (this.id) {
        this.evenementService.getEvenement2(this.id).subscribe(evenement => {
          this.evenement =evenement;
        });
      }
      }
    
      updateEvenement() {
         this.evenementService.updateEvenement(this.evenement).then(
          () => {
            this.router.navigateByUrl("/liste-evenement");
          },
        );
    
      }
    
   }
   