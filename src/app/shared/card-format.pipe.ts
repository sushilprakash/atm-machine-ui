import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cardFormat'})
export class CardFormatPipe implements PipeTransform {
    transform(plainCreditCard: string): string {
      return plainCreditCard.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
  }