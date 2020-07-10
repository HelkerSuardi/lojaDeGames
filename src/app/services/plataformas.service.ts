import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plataforma } from '../models/plataforma.model';

@Injectable({
    providedIn: 'root'
})
export class PlataformasService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Plataforma[]> {
        return this.firestore.collection<Plataforma>('plataformas').valueChanges({ idField: 'id' });
    }

    private convertToPlataforma(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Plataforma {

        const dados = document.data();

        const plataforma = {
            id: document.id,
            ...dados
        } as Plataforma;

        return plataforma;

    }

    async add(plataforma: Plataforma): Promise<Plataforma> {

        const documentRef = await this.firestore.collection<Plataforma>('plataformas').add(plataforma);
        const document = await documentRef.get();

        return this.convertToPlataforma(document);

    }

    async get(id: string): Promise<Plataforma> {

        const document = await this.firestore.collection<Plataforma>('plataformas').doc(id).get().toPromise();

        return this.convertToPlataforma(document);

    }

    async update(id: string, plataforma: Plataforma): Promise<void> {

        await this.firestore.collection<Plataforma>('plataformas').doc(id).update(plataforma);

    }

}
