import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentDetail } from 'src/app/shared/department-detail.model';
import { DepartmentDetailService } from 'src/app/shared/department-detail.service';

@Component({
  selector: 'app-department-detail-form',
  templateUrl: './department-detail-form.component.html',
  styles: [
  ]
})
export class DepartmentDetailFormComponent implements OnInit {
formData : DepartmentDetail = new DepartmentDetail();
  constructor(public service: DepartmentDetailService) { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
this.service.postDepartment(this.service.formData).subscribe(
  res => {
        this.resetForm(form);
  },err => {console.log(err);}
 );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.formData = new DepartmentDetail();
  }

}
