import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: "root"
})
export class PredictService {

    url = "https://employee-attritions.firebaseapp.com/predicted-employee.json";

    constructor(private http: HttpClient, private afs: AngularFirestore) { }

    postPredictData(form: any) {
        this.afs.collection("predicted-employee").add(form).then(data => console.log(data))
    }

    getPredictData() {
        return this.afs.collection("predicted-employee").snapshotChanges();
    }
}