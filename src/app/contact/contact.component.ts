// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { User } from '../_models/index';
import { Contact, ContactService } from './contact.service';
import { UserService }             from '../core/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent implements OnInit {
  contact:  Contact;
  contacts: Contact[];
    
    currentUser: User;
    users: User[] = [];

  msg = 'Loading contacts ...';
  userName = '';
    
    
    

  constructor(private contactService: ContactService, private userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });
      
      this.loadAllUsers();
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
  }

  onSubmit() {
    // POST-DEMO TODO: do something like save it
    this.displayMessage('Saved ' + this.contact.name);
  }

  newContact() {
    this.displayMessage('New contact');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
    
    
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
    
      private loadAllUsers() {
       // this.userService.getAll().subscribe(users => { this.users = users; });
       this.userService.getAll().subscribe(users => {
            this.users = users.usd; });
        
    }
    
    
}
