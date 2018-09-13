import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['To Become Humble', 'To be Wise and calm', 'To be Kind']);
  goal = this.goals.asObservable();

  constructor() {
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
