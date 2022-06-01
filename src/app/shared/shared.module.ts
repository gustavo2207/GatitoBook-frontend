import { MessagesModule } from './../components/messages/messages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MessagesModule, ReactiveFormsModule],
  exports: [MessagesModule, ReactiveFormsModule],
})
export class SharedModule {}
