import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    console.log(this.user, this.password);
    this.authService.authenticate(this.user, this.password).subscribe({
      next: () => {
        console.log('autenticado com sucesso');
        this.router.navigateByUrl('animais');
      },
      error: (error) => {
        console.log(error);
        alert('Usuário ou Senha inválido');
      },
      complete: () => console.log('complete'),
    });
  }
}
