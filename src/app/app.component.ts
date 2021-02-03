import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-nextGen';
  fruits : Array<any> = ['apple','banana','orange','cherry','kiwi'];
  newFruits : Array< String> = [];
  isChecked : Boolean =false;  

  constructor(private fb: FormBuilder) { }

  onChange(name:String , isChecked : Boolean) {
    this.newFruits?.push(name);
    const index = this.fruits.indexOf(name);
if (index > -1) {
  this.fruits.splice(index, 1);
}
    // const fruits = (this.form.controls. as FormArray);

    // if (isChecked) {
    //   fruits.push(new FormControl(name));
    // } else {
    //   const index = fruits.controls.findIndex(x => x.value === name);
    //   fruits.removeAt(index);
    // }
  }
  form = new FormGroup({
    fruits: new FormControl(),
  });
  ngOnInit() {
   
  }

  submit() {
    console.log(this.form.value.name);
  }
}
