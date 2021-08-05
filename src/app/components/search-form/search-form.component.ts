import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Input() textterm = '';

  profileForm = new FormGroup({
    textsearch: new FormControl(''),
    // lastName: new FormControl(''),
  });

  constructor(private router: Router) {
    // this.profileForm.patchValue({ textsearch: this.textterm });
  }

  ngOnInit(): void {
    this.profileForm.patchValue({ textsearch: this.textterm });
  }

  updateProfile() {
    this.profileForm.patchValue({ textsearch: 'Nancy' });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this.router.navigate(['/results'], {
      queryParams: { qp: this.profileForm.value.textsearch },
    });
  }
}
