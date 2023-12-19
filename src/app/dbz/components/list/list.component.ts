import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList: Character[] = [];

  @Output()
  deleteCharacter = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    this.deleteCharacter.emit(id);
  }
}
