import { Injectable } from '@nestjs/common';

const data: any = [
  {
    name: 'yuri',
    age: 12,
    height: 160
  },
  {
    name: 'aris',
    age: 13,
    height: 160
  },
  {
    name: 'musso',
    age: 14,
    height: 160
  }
]

@Injectable()
export class AppService {
  getData(): { message: string } {
    return data;
  }
}
