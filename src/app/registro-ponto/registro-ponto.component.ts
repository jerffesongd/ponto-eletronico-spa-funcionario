import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-registro-ponto',
  imports: [],
  templateUrl: './registro-ponto.component.html',
  styleUrls: ['./registro-ponto.component.scss'],
})
export class RegistroPontoComponent implements OnInit, OnDestroy {
  currentTime: string = ''; 
  private rafId: number | null = null;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTime();
  }

  ngOnDestroy() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.rafId = requestAnimationFrame(() => this.updateTime());
  }

  registerAttendance() {
    alert('Frequência registrada com sucesso!');
    this.router.navigate(['/']);
  }
}
