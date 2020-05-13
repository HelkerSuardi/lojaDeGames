import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lojaDeGames';

  constructor(private firestore: AngularFirestore) {}

  async ngOnInit(){
    const documento = await this.firestore.collection('teste').doc('2F61acpIMmJtIU7VnsWB5Y').get().toPromise();
    console.log(documento)
  }
}
