import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
})
export class BuyerComponent implements OnInit {
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  stocks: any[] = [
    {
      id: 4,
      name: 'item',
      itemDesc: 'item 1',
      firstStock: null,
      stockIn: 19,
      entryDate: 1666342032173,
      enteredBy: 1,
      enteredName: 'ADMIN',
      stockOut: null,
      outDate: null,
      issueBy: null,
      issuedName: null,
      lastStock: 19,
      stockLimit: 200,
      createdBy: 1,
      createdName: 'ADMIN',
      createdAt: 1666342032306,
      updatedBy: null,
      updatedName: null,
      updatedAt: 1666342032306,
    },
    {
      id: 10,
      name: 'itemadd',
      itemDesc: 'item add',
      firstStock: 0,
      stockIn: 10,
      entryDate: 1666348972052,
      enteredBy: 3,
      enteredName: 'Zaenal',
      stockOut: null,
      outDate: null,
      issueBy: null,
      issuedName: null,
      lastStock: 10,
      stockLimit: 200,
      createdBy: 3,
      createdName: 'Zaenal',
      createdAt: 1666348972053,
      updatedBy: null,
      updatedName: null,
      updatedAt: 1666348972053,
    },
    {
      id: 10,
      name: 'itemadd',
      itemDesc: 'item add',
      firstStock: 0,
      stockIn: 10,
      entryDate: 1666348972052,
      enteredBy: 3,
      enteredName: 'Zaenal',
      stockOut: null,
      outDate: null,
      issueBy: null,
      issuedName: null,
      lastStock: 10,
      stockLimit: 200,
      createdBy: 3,
      createdName: 'Zaenal',
      createdAt: 1666348972053,
      updatedBy: null,
      updatedName: null,
      updatedAt: 1666348972053,
    },

    {
      id: 10,
      name: 'itemadd',
      itemDesc: 'item add',
      firstStock: 0,
      stockIn: 10,
      entryDate: 1666348972052,
      enteredBy: 3,
      enteredName: 'Zaenal',
      stockOut: null,
      outDate: null,
      issueBy: null,
      issuedName: null,
      lastStock: 10,
      stockLimit: 200,
      createdBy: 3,
      createdName: 'Zaenal',
      createdAt: 1666348972053,
      updatedBy: null,
      updatedName: null,
      updatedAt: 1666348972053,
    },
    {
      id: 10,
      name: 'itemadd',
      itemDesc: 'item add',
      firstStock: 0,
      stockIn: 10,
      entryDate: 1666348972052,
      enteredBy: 3,
      enteredName: 'Zaenal',
      stockOut: null,
      outDate: null,
      issueBy: null,
      issuedName: null,
      lastStock: 10,
      stockLimit: 200,
      createdBy: 3,
      createdName: 'Zaenal',
      createdAt: 1666348972053,
      updatedBy: null,
      updatedName: null,
      updatedAt: 1666348972053,
    },
    {
      id: 10,
      name: 'itemadd',
      itemDesc: 'item add',
      firstStock: 0,
      stockIn: 10,
      entryDate: 1666348972052,
      enteredBy: 3,
      enteredName: 'Zaenal',
      stockOut: null,
      outDate: null,
      issueBy: null,
      issuedName: null,
      lastStock: 10,
      stockLimit: 200,
      createdBy: 3,
      createdName: 'Zaenal',
      createdAt: 1666348972053,
      updatedBy: null,
      updatedName: null,
      updatedAt: 1666348972053,
    },
  ];

  requestOrders: any[] = [
    {
      id: 1,
      requestOrderDetails: [
        {
          id: 3,
          itemId: 8,
          itemName: 'saus',
          itemDesc: 'item add',
          qty: 77,
        },
      ],
      status: 'REQUEST',
      note: '',
      createdBy: 4,
      createdName: 'rachamn',
      createdAt: 1666513900398,
      updatedBy: null,
      updatedName: null,
      updateAt: null,
    },
    {
      id: 2,
      requestOrderDetails: [
        {
          id: 3,
          itemId: 8,
          itemName: 'kecap',
          itemDesc: 'item add',
          qty: 77,
        },
      ],
      status: 'REQUEST',
      note: '',
      createdBy: 4,
      createdName: 'rachamn',
      createdAt: 1666513900398,
      updatedBy: null,
      updatedName: null,
      updateAt: null,
    },
    {
      id: 3,
      requestOrderDetails: [
        {
          id: 3,
          itemId: 8,
          itemName: 'shampoo',
          itemDesc: 'item add',
          qty: 77,
        },
      ],
      status: 'REQUEST',
      note: '',
      createdBy: 4,
      createdName: 'rachamn',
      createdAt: 1666513900398,
      updatedBy: null,
      updatedName: null,
      updateAt: null,
    },
    {
      id: 4,
      requestOrderDetails: [
        {
          id: 3,
          itemId: 8,
          itemName: 'pasta gigi',
          itemDesc: 'item add',
          qty: 77,
        },
      ],
      status: 'REQUEST',
      note: '',
      createdBy: 4,
      createdName: 'rachamn',
      createdAt: 1666513900398,
      updatedBy: null,
      updatedName: null,
      updateAt: null,
    },
  ];

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    roleId: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    let role_id = localStorage.getItem('role_id');
    if (role_id) {
      if (+role_id == 1) {
        this.router.navigateByUrl('/auth/register');
      } else if (+role_id == 2) {
        this.router.navigateByUrl('/requester');
      }
    }
  }
}
