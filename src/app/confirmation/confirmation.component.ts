import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent {
  userDetail: any; // You can specify a more specific type if you know the structure of the 'user' data

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userDetail = JSON.parse(storedUser);
    }
  }
}

