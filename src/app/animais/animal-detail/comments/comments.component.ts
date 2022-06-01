import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comments } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.searchComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required, Validators.maxLength(300)],
    });
  }

  save(): void {
    const comment = this.commentForm?.get('comment')?.value ?? '';

    this.comments$ = this.commentService.createComment(this.id, comment).pipe(
      switchMap(() => this.commentService.searchComment(this.id)),
      tap(() => {
        this.commentForm.reset();
        alert('Comment save');
      })
    );
  }
}
