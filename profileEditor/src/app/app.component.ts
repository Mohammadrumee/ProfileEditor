import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Profile Editor';

  formUser: User = {
    name: 'Rumee',
    age: 25,
    favoriteColor: 'Green',
  };


  users: User[] = [];

  displayEdit: boolean = false;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }

  saveChanges() {
    this.toggleEdit();
    this.users.push(this.formUser);
  }
}