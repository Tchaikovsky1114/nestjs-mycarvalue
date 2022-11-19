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
    // 1.DB에 저장되는 데이터는 Validation test를 통과한 이후에 저장되어야 하기 때문이다.
    // 2.entity(DTO)에 저장된 Hooks를 사용해야 하기 때문이다.
    const user = this.repo.create({email,password});

    return this.repo.save(user);
  }

  findOne(id: number) {
    // 하나만 찾을 때 findOneBy, 값이 없다면 return null
    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    // 복수의 값을 찾을 때 find, 값이 없다면 empty array []
    return this.repo.find({where: { email } })
  }

  // 유연하게 업데이트 할 수 있는 유형을 정의해야 한다.
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if(!user) {
      throw new Error('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if(!user) {
      throw new Error('user not found');
    }
    return this.repo.remove(user);
  }
  
}

const userService = new UsersService({} as any)
