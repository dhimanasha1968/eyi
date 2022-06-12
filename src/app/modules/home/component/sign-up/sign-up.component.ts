import { Component, Input, OnInit } from '@angular/core';
import { SignUpInfo } from '../../models';

@Component({
  selector: 'eyi-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Input() signUpInfo!: SignUpInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
