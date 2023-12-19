import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  addCharacter = new EventEmitter<Character>;

  public character: Character = {
    name: '',
    power: 0
  }

  onSubmitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    // sent by reference, use spread operator
    this.addCharacter.emit({...this.character});

    // reset the character, reset the form
    this.character.name = '';
    this.character.power = 0;
  }
}
