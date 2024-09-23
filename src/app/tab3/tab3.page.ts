import { Component } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  editMode: boolean = true;
  patient= {
    name: '',
    firstName: '',
    email: '',
    age: null,
    gender: '',
    subscriptionType:''

  };
  constructor() {}

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
