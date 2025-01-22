import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumo-ponto',
  imports: [FormsModule, CommonModule ],
  templateUrl: './resumo-ponto.component.html',
  styleUrls: ['./resumo-ponto.component.scss'],
})
export class ResumoPontoComponent implements OnInit {
  meses = [
    { value: 0, label: 'Janeiro' },
    { value: 1, label: 'Fevereiro' },
    { value: 2, label: 'Março' },
    { value: 3, label: 'Abril' },
    { value: 4, label: 'Maio' },
    { value: 5, label: 'Junho' },
    { value: 6, label: 'Julho' },
    { value: 7, label: 'Agosto' },
    { value: 8, label: 'Setembro' },
    { value: 9, label: 'Outubro' },
    { value: 10, label: 'Novembro' },
    { value: 11, label: 'Dezembro' },
  ];

  anos = [2023, 2024, 2025];

  selectedMes = new Date().getMonth();
  selectedAno = new Date().getFullYear();

  cargaHorariaMensal = 0;
  cargaHorariaDiaria = 0;

  registros: { data: string; entrada: string; saida: string; totalHoras: string }[] = [];

  dadosFicticios: any;

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.dadosFicticios = {
      '2024-01': [
        { data: '01/01/2024', entrada: '08:00', saida: '17:00', totalHoras: '8h' },
        { data: '02/01/2024', entrada: '09:00', saida: '18:00', totalHoras: '8h' },
        { data: '03/01/2024', entrada: '08:30', saida: '16:30', totalHoras: '7h' },
      ],
      '2024-02': [
        { data: '01/02/2024', entrada: '08:00', saida: '17:00', totalHoras: '8h' },
        { data: '02/02/2024', entrada: '09:00', saida: '18:00', totalHoras: '8h' },
        { data: '03/02/2024', entrada: '08:30', saida: '16:30', totalHoras: '7h' },
      ],
    };

    const chave = `${this.selectedAno}-${String(this.selectedMes + 1).padStart(2, '0')}`;
    this.registros = this.dadosFicticios[chave] || [];
    this.cargaHorariaMensal = this.registros.reduce((acc, item) => acc + parseInt(item.totalHoras), 0);
    this.cargaHorariaDiaria = this.registros.length > 0 ? parseInt(this.registros[0].totalHoras) : 0;
  }

  onChangeMes() {
    this.carregarDados();
  }

  onChangeAno() {
    this.carregarDados();
  }
}
