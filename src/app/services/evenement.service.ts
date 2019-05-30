import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from "@angular/fire/firestore";

import { AngularFireDatabase } from '@angular/fire/database';
import {  FirebaseListObservable } from "@angular/fire/database-deprecated";  
import * as firebase from 'firebase/app';
import { map, take } from "rxjs/operators";
import { Observable,pipe } from "rxjs";
export class Evenement {
  nom:string;
  FermetureGuestlist:string;
  HeureMaximaledDArivee:string;
  NombreDePersones:string;
  Details:string;
  id?:string;
  file:File;
  $key: string;
  name:string;
  url:string;
  progress:number;
  createdAt: Date = new Date();
  constructor(file:File) {
    this.file = file;
  }
 }

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private saveFileData(upload: Evenement) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Evenement[]>;

  pushUpload(upload: Evenement) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
    
  }
  private evenement: Observable<Evenement[]>;
  private evenementCollection: AngularFirestoreCollection<Evenement>;

  constructor(private afs: AngularFirestore, private af: AngularFirestore, private db: AngularFireDatabase) {
    this.evenementCollection = this.afs.collection<Evenement>("evenement");
    this.evenement= this.evenementCollection.snapshotChanges().pipe(
      map(Action=>{
        return Action.map(a=>{
          const data =a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id,...data};
        })
      })     
);

   }
   getEvenement(): Observable<Evenement[]> {
    return this.evenement;
  }

  getEvenement2(id: string): Observable<Evenement> {
    return this.evenementCollection
      .doc<Evenement>(id)
      .valueChanges()
      .pipe(take(1),
        map(idea => {
          idea.id = id;
          return idea;
        })
      );
  }


  addEvenement(evenement: Evenement): Promise<DocumentReference> {

    return this.evenementCollection.add(evenement);
  }
  getFilteredEvenement(filter: number): Observable<Evenement[]> {
    return this.afs
      .collection<Evenement>("evenement", ref =>
        ref.where("numero", "==", filter)
      )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(d => {
            const data = d.payload.doc.data();
            const id = d.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
  updateEvenement(evenement: Evenement): Promise<void> {

    return this.evenementCollection.doc(evenement.id).update({
    
    });
}
}
