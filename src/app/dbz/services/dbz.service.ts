import {Injectable} from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import {Character} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {id: uuidv4(), name: 'Goku', power: 1000},
    {id: uuidv4(), name: 'Vegetta', power: 700},
    {id: uuidv4(), name: 'Freezer', power: 750}
  ];

  addCharacter(char: Character): void {
    this.characters.push({...char, id: uuidv4()});
  }

  deleteChar(id: string): void {
    this.characters = this.characters.filter(char => char.id !== id);
  }
}
