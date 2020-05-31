import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jogo } from '../models/jogo.models';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  constructor(private firestore: AngularFirestore) { }

  async add(jogo: Jogo): Promise<Jogo> {

    const docRef = await this.firestore.collection<Jogo>('jogos').add(jogo);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Jogo;
  }

  async get(id: string): Promise<Jogo> {

    const doc = await this.firestore.collection<Jogo>('jogos').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as Jogo;

  }
}
