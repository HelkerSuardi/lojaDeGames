import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Plataforma } from '../models/plataforma.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlataformasService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Plataforma[]> {
    return this.firestore.collection<Plataforma>('plataformas').valueChanges({ idField: 'id' });
  }

  async add(plataforma: Plataforma): Promise<Plataforma> {

    const docRef = await this.firestore.collection<Plataforma>('plataformas').add(plataforma);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Plataforma;
  }

  async get(id: string): Promise<Plataforma> {

    const doc = await this.firestore.collection<Plataforma>('plataformas').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as Plataforma;

  }
}
