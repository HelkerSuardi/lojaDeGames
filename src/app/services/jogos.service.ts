import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jogo } from '../models/jogo.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JogosService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Jogo[]> {
        return this.firestore.collection<Jogo>('jogos').valueChanges({ idField: 'id' });
    }

    private convertToJogo(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Jogo {

        const dados = document.data();

        const jogo = {
            id: document.id,
            ...dados
        } as Jogo;

        return jogo;

    }

    async add(estilo: Jogo): Promise<Jogo> {

        const documentRef = await this.firestore.collection<Jogo>('jogos').add(estilo);
        const document = await documentRef.get();

        return this.convertToJogo(document);

    }

    async get(id: string): Promise<Jogo> {

        const document = await this.firestore.collection<Jogo>('jogos').doc(id).get().toPromise();

        return this.convertToJogo(document);

    }

    async update(id: string, jogo: Jogo): Promise<void> {

        await this.firestore.collection<Jogo>('jogos').doc(id).update(jogo);

    }

}
