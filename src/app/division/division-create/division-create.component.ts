import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DivisionService } from '../../services/division.service';

@Component({
  selector: 'app-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.css'],
})
export class DivisionCreateComponent implements OnInit {
  divisionForm: any;

  constructor(
    private divisionService: DivisionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.divisionForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onSubmit() {
    // create a new division with divisionForm.value
    this.divisionService.create(this.divisionForm.value).subscribe(
      (data) => {
        console.log(data);

        // reset the form
        this.divisionForm.reset();

        // redirect to division list and refresh
        this.router.navigate(['/division']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
