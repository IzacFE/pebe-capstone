import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RequesterService } from 'src/app/services/requester/requester.service';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.css'],
})
export class RequesterComponent implements OnInit {
  public modalStatus: string = '';
  public requestForm: FormGroup = new FormGroup({});
  public modalDisplay: boolean = false;

  public stockListResult: any = {};
  public stockListTotalPage: any;
  public stockListPageNumber: number = 1;
  public stockListLoading: boolean = false;
  public stockItemDetail: any = {};

  public requestListResult: any = {};
  public requestListLoading: boolean = false;
  public displayrequestItemDetail: boolean = false;
  public requestItemDetail: any = {};

  constructor(
    private requesterService: RequesterService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let roleId = localStorage.getItem('roleId');
    if (roleId) {
      if (+roleId !== 2) {
        this.router.navigateByUrl('/auth/login');
      }
    }

    this.requestForm = new FormGroup({
      note: new FormControl('a', Validators.required),
      requestOrderDetails: this.formBuilder.array([this.nestedArray()]),
    });

    this.stockListLoading = true;
    this.requesterService.httpGetAllStock(1).subscribe(
      (data: any) => {
        this.stockListResult = data;

        this.stockListLoading = false;
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.stockListLoading = false;
      }
    );

    this.requestListLoading = true;
    this.requesterService.httpGetRequestOrder().subscribe(
      (data: any) => {
        this.requestListResult = data;
        this.requestListLoading = false;
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.requestListLoading = false;
      }
    );
  }

  paginate(event: any) {
    this.stockListLoading = true;
    this.requesterService.httpGetAllStock(event.pageCount).subscribe(
      (data) => {
        this.stockListResult = data;
        this.stockListLoading = false;
      },
      (error) => {
        console.log(error);
        this.stockListLoading = false;
      }
    );
  }

  showStockItemDetail(data: any, target: string) {
    this.modalStatus = target;
    if (target == 'stock') {
      this.stockItemDetail = data;
    } else if (target == 'request') {
      this.requestItemDetail = data;
      console.log(this.requestItemDetail);
    }
    this.modalDisplay = true;
  }

  nestedArray() {
    return this.formBuilder.group({
      itemId: [1, Validators.required],
      itemName: ['a', Validators.required],
      itemDesc: ['a', Validators.required],
      qty: [1, Validators.required],
    });
  }

  get requestOrderDetailsControl(): FormArray {
    return this.requestForm.get('requestOrderDetails') as FormArray;
  }
}
