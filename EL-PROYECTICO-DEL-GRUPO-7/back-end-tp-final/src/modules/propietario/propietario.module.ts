import { Module } from '@nestjs/common';
import { PropietarioService } from './propietario.service';
import { PropietarioController } from './propietario.controller';
import { HttpModule } from '@nestjs/axios';

import { DatabaseModule } from './../../database/database.module';
import { PropietarioProviders } from './providers/propietario.providers';

@Module({
  imports: [HttpModule,
    DatabaseModule],
  controllers: [PropietarioController],
  providers: [PropietarioService, ...PropietarioProviders],
  exports: [PropietarioService]
})
export class PropietarioModule { }
