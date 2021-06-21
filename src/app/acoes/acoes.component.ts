import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { AcoesService } from './acoes.service'

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  todasAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => {
      console.log('Fluxo inicial')
    })
  );

  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => { console.log('Fluxo do filtro') }),
    tap(console.log),
    filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$); // observable

  constructor(private acoesService: AcoesService) { }

}
