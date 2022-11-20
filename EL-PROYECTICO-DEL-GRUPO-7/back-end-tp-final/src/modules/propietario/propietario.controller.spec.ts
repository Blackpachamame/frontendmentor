import { Test, TestingModule } from '@nestjs/testing';
import { PropietarioController } from './propietario.controller';
import { PropietarioService } from './propietario.service';

describe('PropietarioController', () => {
  let controller: PropietarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropietarioController],
      providers: [PropietarioService],
    }).compile();

    controller = module.get<PropietarioController>(PropietarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
