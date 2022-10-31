import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RequesterService } from 'src/app/services/requester/requester.service';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.css'],
  providers: [MessageService],
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

  public listItem: any = {};

  constructor(
    private requesterService: RequesterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    let roleId = localStorage.getItem('roleId');
    if (roleId) {
      if (+roleId !== 2) {
        this.router.navigateByUrl('/auth/login');
      }
    }

    this.requestForm = new FormGroup({
      note: new FormControl('', Validators.required),
      requestOrderDetails: this.formBuilder.array([this.nestedArray()]),
    });

    this.stockListLoading = true;
    this.requesterService.httpGetAllStock(1).subscribe(
      (data: any) => {
        this.stockListResult = data;

        this.stockListLoading = false;
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
      },
      (error) => {
        console.log(error);
        this.requestListLoading = false;
      }
    );

    this.requesterService.httpItemList().subscribe(
      (data: any) => {
        this.listItem = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
        this.stockListLoading = false;
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
      itemId: ['', Validators.required],
      qty: [1, Validators.required],
    });
  }

  get requestOrderDetailsControl(): FormArray {
    return this.requestForm.get('requestOrderDetails') as FormArray;
  }

  onShowSuccessRequest(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Permintaan Barang berhasil dibuat',
      detail: `Permintaan akan di proses!`,
    });
  }

  onShowErrorRequest(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Permintaan Gagal!',
      detail: 'Input salah! Silahkan coba lagi',
    });
  }

  submitRequest() {
    this.requesterService
      .httpCreateRequestOrder(this.requestForm.value)
      .subscribe(
        (res: any) => {
          if (res) {
            this.onShowSuccessRequest();
            this.requestForm.reset();

            setTimeout(() => {}, 1000);
          }
        },
        (error) => {
          this.onShowErrorRequest();
        }
      );
  }
}
