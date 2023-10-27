import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})

export class FormArrayComponent {
  
  isReady:boolean = false;
  options: User[] = [
    { name: 'Mary' },
    { name: 'Shelley' },
    { name: 'Igor' }
  ];
  filteredOptions: Observable<User[]>[] = [];
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      date: [{ value: '', disabled: true }, [Validators.required]],
      notes: [''],
      items: this.fb.array([])
    });
    // this.createForm();
  }
  createForm() {
    this.manageNameControl(0);
    this.manageNameControl(1);
    this.isReady = true;
  }
  // initItems() {
  //   var formArray = this.fb.array([]);
    
  //   for (let i = 0; i < 2; i++) {
  //     formArray.push(this.fb.group({
  //       name: ['', [Validators.required]],
  //       age: ['', [Validators.required]],
  //     }));
  //   }
  //   return formArray;
  // }
  manageNameControl(index: number) {
    // let arrayControl = this.myForm.get('items') as FormArray;
    let nameFieldControl = this.getItemsControls().at(index).get('name');
    if (nameFieldControl) {
      this.filteredOptions[index] = nameFieldControl.valueChanges
        .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
        );
    }
  }

  getItemsControls() {
    // return this.myForm.get("items") as FormArray;
    return <FormArray>this.myForm.controls['items'];
  }

  addNewItem() {
    // const controls = <FormArray>this.myForm.controls['items'];
    let item = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
    this.getItemsControls().push(item);
    // Build the account Auto Complete values
    this.manageNameControl(this.getItemsControls().length - 1);

  }

   removeItem(i: number) {
    const controls = <FormArray>this.myForm.controls['items'];
    controls.removeAt(i);
    // remove from filteredOptions too.
    this.filteredOptions.splice(i, 1);

  }

  ngOnInit() {

  }

  displayFn(user: User): string {
    return user ? user.name : "";
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
