import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TaxService } from '../tax.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  firstFormGroup;
  secondFormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taxService: TaxService
  ) {
    this.firstFormGroup = this.formBuilder.group({
      name: '',
      residency: '',
      citizenship: ''
    });

    this.secondFormGroup = this.formBuilder.group({
      nickname: ''
    });

  }

  onSubmit(userInfo) {
    let user = new User();
    Object.assign(user, userInfo);
    console.log(user);
  }

  getTaxAdvice(userInfo) {
    this.taxService.getTaxAdvice(userInfo)
      .subscribe(resp => {
        window.alert(resp.id);
      })
  }

  ngOnInit(): void {
  }

  countryCodeMap = [
    { name: "Czechia", code: 'cz' },
    { name: "United Kingdom", code: 'gb' },
    { name: "Switzerland", code: 'ch' },
  ]

}
