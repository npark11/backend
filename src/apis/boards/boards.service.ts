import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    const result = [
      {
        number: 1,
        writer: 'Tom',
        title: 'Title01',
        contents: 'Contents01',
      },
      {
        number: 2,
        writer: 'Olivia',
        title: 'Title02',
        contents: 'Contents02',
      },
      {
        number: 3,
        writer: 'Jack',
        title: 'Title03',
        contents: 'Contents03',
      },
    ];

    return result;
  }

  // create(writer: string, title: string, contents: string): string {
  create({ createBoardInput }: IBoardsServiceCreate): string {
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    return 'Created your post Successfully!';
  }
}
