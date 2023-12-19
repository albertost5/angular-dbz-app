import {Component} from '@angular/core';
import {Character} from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public characters: Character[] = [
    {name: 'Goku', power: 1000},
    {name: 'Vegetta', power: 700},
    {name: 'Freezer', power: 750}
  ]

  addCharacterToList(char: Character): void {
    this.characters.push(char);
  }

  deleteCharFromList(index: number): void {
    this.characters = this.characters.filter((char, idx) => idx !== index);
  }
}
