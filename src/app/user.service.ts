import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Phone } from './phone';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users;
  select = new BehaviorSubject<string>('111');
  constructor() {
    this.users = [
      new User({
        id: '111',
        name: 'name_111',
        phones: [
          new Phone({ id: 'p1_1', phoneNumber: '1111111' }),
          new Phone({ id: 'p1_2', phoneNumber: '22222222' }),
        ]
      }),
      new User({
        id: '222',
        name: 'name_222',
        phones: [
          new Phone({ id: 'p2_1', phoneNumber: '33333333' }),
          new Phone({ id: 'p2_2', phoneNumber: '44444444' }),
        ]
      }),
      new User({
        id: '333',
        name: 'name_333',
        phones: [
          new Phone({ id: 'p3_1', phoneNumber: '5555555555' }),
          new Phone({ id: 'p3_2', phoneNumber: '66666666' }),
        ]
      })
    ];
   }

  getUsers() {
    return this.users;
  }
  getUserById(id) {
    return this.users.find(u => u.id === id);
  }

}
