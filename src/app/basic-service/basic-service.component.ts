import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetRecordsService } from '../service/get-records.service';

@Component({
  selector: 'app-basic-service',
  templateUrl: './basic-service.component.html',
  styleUrls: ['./basic-service.component.css']
})
export class BasicServiceComponent implements OnInit {
  employeeForm: FormGroup;
  records: any;
  postSuccessMessage: any;
  error: string;
  dropdownObjectArrayVariable: any ;
  actualValue : any = '';




  constructor(private getRecordService: GetRecordsService, private formBuilder: FormBuilder,
    private injector: Injector) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      employee_name: ['', Validators.required],
      employee_salary: ['', Validators.required],
      employee_age: ['', Validators.required]
    });

    this.dropdownObjectArrayVariable  = this.getRecordService.dropdownObjectArray();

  }

  onSubmit() {
    this.getRecordService.postRecord((this.employeeForm.value)).subscribe(data => {
      this.postSuccessMessage = data;

    }, error => {
      this.error = error;

    }

    );
  }

  onChange(deviceValue) {
    alert(this.dropdownObjectArrayVariable);
   console.log(deviceValue);
  }

  serviceCallSamePage(event: any) {

    this.getRecordService.getRecords().subscribe((response: any) => {
      this.records = response


    },
      error => {
        this.error = error;
        console.log("Error", error); let router = this.injector.get(Router);
        router.navigate(['/error']);

      });

  }
}
