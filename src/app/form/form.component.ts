import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fff: FormGroup;
  constructor(
    private fb: FormBuilder,
    private us: UserService
  ) { }

  ngOnInit() {
    this.fff = this.fb.group({
      id: '',
      name: '',
      phones: this.fb.array([this.createPhone()])
    });

    this.us.select.subscribe(id => {
      const u = this.us.getUserById(id);
      console.log(u);
      this.fff.patchValue({
        id: u.id,
        name: u.name,
      });
      while ( this.phones.length) {
        this.phones.removeAt(0);
      }
      for ( const p of u.phones) {
        this.addPhone(p);
      }
    });

    this.fff.valueChanges.subscribe(values => {
      console.log('TCL: FormComponent -> ngOnInit -> values', values);
      const u = this.us.getUserById(values.id);
      for (const key of Object.keys(values)) {
        if (key) {
          u[key] = values[key];
        }
      }
    });
  }

  createPhone(phone = {id: '---', phoneNumber: '0909'}): FormGroup {
    return this.fb.group({
      id: phone.id,
      phoneNumber: phone.phoneNumber
    });
  }
  get phones(): FormArray {
    return this.fff.get('phones') as FormArray;
  }
  addPhone(phone) {
    this.phones.push(this.createPhone(phone));
  }
}
