import { Test, TestingModule } from '@nestjs/testing';
import { UserRespository } from './user-respository';

describe('UserRespository', () => {
  let provider: UserRespository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRespository],
    }).compile();

    provider = module.get<UserRespository>(UserRespository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
