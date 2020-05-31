import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FaixaEtaria } from '../models/faixa-etaria.models';

@Injectable({
  providedIn: 'root'
})
export class FaixasEtariasService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<FaixaEtaria[]> {
    return this.firestore.collection<FaixaEtaria>('faixas_etarias').valueChanges({ idField: 'id' });
  }

  async add(faixaEtaria: FaixaEtaria): Promise<FaixaEtaria> {

    const docRef = await this.firestore.collection<FaixaEtaria>('faixas_etarias').add(faixaEtaria);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as FaixaEtaria;
  }

  async get(id: string): Promise<FaixaEtaria> {

    const doc = await this.firestore.collection<FaixaEtaria>('faixas_etarias').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as FaixaEtaria;

  }
}
