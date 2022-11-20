import { Test, TestingModule } from '@nestjs/testing';
import { PropietarioService } from './propietario.service';

describe('PropietarioService', () => {
  let service: PropietarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropietarioService],
    }).compile();

    service = module.get<PropietarioService>(PropietarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
