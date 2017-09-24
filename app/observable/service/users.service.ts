import {Subject} from "rxjs/Subject";
export class UsersService{
    subject:Subject<number> = new Subject<number>();
}