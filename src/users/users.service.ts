import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  
  //typeorm을 사용할 때마다 똑같은 구문이 반복되므로 원리를 이해할 수 없다면 외워야 함.. decorator는 generic 변환이 어려우므로 InjectRepository를 사용한다고 한다.
  // InjectRepository(Entity) private repovar: Repository<Typeorm>
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email:string, password:string) {
    // create와 save가 나누어 진 이유는,
    // DB에 저장되는 데이터는 Validation test를 통과한 이후에 저장되어야 하기 때문이다.
    const user = this.repo.create({email,password});

    return this.repo.save(user);
  }
}
