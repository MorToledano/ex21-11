import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  url = 'https://employee-attritions.firebaseapp.com/predicted-employee.json';
  classify: any;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  postPredictData(form: any, res: string) {
    form['result'] = res;
    this.authService
      .getUser()
      .pipe(
        switchMap((u: any) => {
          form['userID'] = u?.uid;
          const f = this.afs.collection('predicted-employee').add(form);
          return f;
        })
      )
      .subscribe();
    //   .subscribe((u) => {
    //     console.log('u ', u);
    //     form['userID'] = u?.uid;

    //     this.afs
    //       .collection('predicted-employee')
    //       .add(form)
    //       .then((data) => console.log(data));
    //   });
  }

  getPredictData() {
    return this.afs.collection('predicted-employee').snapshotChanges();
  }
}
