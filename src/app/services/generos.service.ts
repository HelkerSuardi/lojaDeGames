import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero.models';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Genero[]> {
    return this.firestore.collection<Genero>('generos').valueChanges({ idField: 'id' });
  }

  async add(genero: Genero): Promise<Genero> {

    const docRef = await this.firestore.collection<Genero>('generos').add(genero);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Genero;
  }

  async get(id: string): Promise<Genero> {

    const doc = await this.firestore.collection<Genero>('generos').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as Genero;

  }
}
