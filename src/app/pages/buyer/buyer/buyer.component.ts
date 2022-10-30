import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { BuyerService } from 'src/app/services/buyer/buyer.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
})
export class BuyerComponent implements OnInit {
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  public modalStatus: string = '';
  public purchaseForm: FormGroup = new FormGroup({});
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

  public purchaseListResult: any = {};
  public purchaseListLoading: boolean = false;
  public displaypurchaseItemDetail: boolean = false;
  public purchaseItemDetail: any = {};

  constructor(
    private router: Router,
    private buyerService: BuyerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let roleId = localStorage.getItem('roleId');
    if (roleId) {
      if (+roleId == 1) {
        this.router.navigateByUrl('/auth/register');
      } else if (+roleId == 2) {
        this.router.navigateByUrl('/requester');
      }
    }

    this.purchaseForm = new FormGroup({
      note: new FormControl('a', Validators.required),
      requestOrderDetails: this.formBuilder.array([this.nestedArray()]),
    });

    this.stockListLoading = true;
    this.buyerService.httpGetAllStock(1).subscribe(
      (data) => {
        this.stockListResult = data;
        this.stockListLoading = false;
      },
      (error) => {
        console.log(error);
        this.stockListLoading = false;
      }
    );

    this.requestListLoading = true;
    this.buyerService.httpGetAllRequestOrder().subscribe(
      (data: any) => {
        this.requestListResult = data;
        this.requestListLoading = false;
        console.log(this.requestListResult);
      },
      (error) => {
        console.log(error);
        this.requestListLoading = false;
      }
    );

    this.purchaseListLoading = true;
    this.buyerService.httpPurchaseHistory().subscribe(
      (data: any) => {
        this.purchaseListResult = data;
        this.purchaseListLoading = false;
        console.log(this.purchaseListResult);
      },
      (error) => {
        console.log(error);
        this.purchaseListLoading = false;
      }
    );
  }

  paginate(event: any) {
    this.stockListLoading = true;
    this.buyerService.httpGetAllStock(event.pageCount).subscribe(
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
    return this.purchaseForm.get('requestOrderDetails') as FormArray;
  }
}
