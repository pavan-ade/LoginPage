import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Login';
  islogin = true;
  selectedRole = '';
  userName = '';
  password = '';

  logout() { 
    this.islogin = true;
  }

  login() {
    this.islogin = false;
  }

  onRoleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRole = selectElement.value;
  }
}
