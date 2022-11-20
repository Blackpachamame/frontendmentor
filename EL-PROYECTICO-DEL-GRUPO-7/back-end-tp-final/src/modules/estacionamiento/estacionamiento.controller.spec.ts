import { Test, TestingModule } from '@nestjs/testing';
import { EstacionamientoController } from './estacionamiento.controller';
import { EstacionamientoService } from './estacionamiento.service';

describe('EstacionamientoController', () => {
  let controller: EstacionamientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstacionamientoController],
      providers: [EstacionamientoService],
    }).compile();

    controller = module.get<EstacionamientoController>(EstacionamientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
