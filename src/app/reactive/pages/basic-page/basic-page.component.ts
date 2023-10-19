import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './basic-page.component.html'
})
export class BasicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  isValidField( field: string ): boolean {
    return this.validatorsService.isValidField( this.myForm, field );
  }

  getFieldError( field: string ): string | null {
    if ( !this.myForm.controls[field])
      return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres`
      }
    }
    return null;
  }

  onSave(): void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
  
    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });
  }

}
