import { Router } from '@angular/router';
import { AnimalsService } from './../animals.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {
  formAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualDone: number = 0;

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formAnimal = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = this.formAnimal.get('allowComments')?.value ?? false;
    const description = this.formAnimal.get('description')?.value ?? '';

    this.animalsService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigateByUrl('/animais')))
      .subscribe({
        next: (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentualDone = Math.round(100 * (event.loaded / total));
          }
        },
        error: (error) => console.error(error),
      });
  }

  recordFile(formFile: any): void {
    const [file] = formFile?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.preview = event.target.result;
      console.log(event.target.result);
    };
    reader.readAsDataURL(file);
  }
}
