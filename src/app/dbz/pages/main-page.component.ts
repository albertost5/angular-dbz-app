import {Component} from '@angular/core';
import {Character} from '../interfaces/character.interface';
import {DbzService} from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onAddCharacter(char: Character): void {
    this.dbzService.addCharacter(char);
  }

  onDeleteCharFromList(id: string): void {
    this.dbzService.deleteChar(id)
  }

  constructor(private dbzService: DbzService) {
  }
}
