import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Desenvolvedora } from '../models/desenvolvedora.models';

@Injectable({
  providedIn: 'root'
})
export class DesensevolvedorasService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Desenvolvedora[]> {
    return this.firestore.collection<Desenvolvedora>('desensevolvedoras').valueChanges({ idField: 'id' });
  }

  async add(desenvolvedora: Desenvolvedora): Promise<Desenvolvedora> {

    const docRef = await this.firestore.collection<Desenvolvedora>('desensevolvedoras').add(desenvolvedora);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Desenvolvedora;
  }

  async get(id: string): Promise<Desenvolvedora> {

    const doc = await this.firestore.collection<Desenvolvedora>('faixas_etarias').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as Desenvolvedora;

  }
}
