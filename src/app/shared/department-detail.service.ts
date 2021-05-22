import { Injectable } from '@angular/core';
import { DepartmentDetail } from './department-detail.model';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DepartmentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseurl = "http://localhost:59046/api/Department";
  formData : DepartmentDetail = new DepartmentDetail();
  postDepartment(formData:any){
    return this.http.post(this.baseurl+"/PaymentDetail",formData);
  }
}
