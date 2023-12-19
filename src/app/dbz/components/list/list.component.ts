import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList: Character[] = [{
    name: 'Trunks',
    power: 200
  }];

  @Output()
  deleteCharacter = new EventEmitter<number>();

  onDeleteCharacter(index: number): void {
    this.deleteCharacter.emit(index);
  }
}
