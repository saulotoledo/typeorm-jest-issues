import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { User } from '../../users/entities/user.entity';
import { UsersService } from '../../users/services/users.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) { }
}
