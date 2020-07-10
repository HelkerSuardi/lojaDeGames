import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Desenvolvedora } from '../models/desenvolvedora.model';

@Injectable({
    providedIn: 'root'
})
export class DesensevolvedorasService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Desenvolvedora[]> {
        return this.firestore.collection<Desenvolvedora>('desensevolvedoras').valueChanges({ idField: 'id' });
    }

    private convertToDesensevolvedoras(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Desenvolvedora {

        const dados = document.data();

        const desensevolvedora = {
            id: document.id,
            ...dados
        } as Desenvolvedora;

        return desensevolvedora;

    }

    async add(desensevolvedora: Desenvolvedora): Promise<Desenvolvedora> {

        const documentRef = await this.firestore.collection<Desenvolvedora>('desensevolvedoras').add(desensevolvedora);
        const document = await documentRef.get();

        return this.convertToDesensevolvedoras(document);

    }

    async get(id: string): Promise<Desenvolvedora> {

        const document = await this.firestore.collection<Desenvolvedora>('desensevolvedoras').doc(id).get().toPromise();

        return this.convertToDesensevolvedoras(document);

    }

    async update(id: string, desensevolvedora: Desenvolvedora): Promise<void> {

        await this.firestore.collection<Desenvolvedora>('desensevolvedoras').doc(id).update(desensevolvedora);

    }

}
