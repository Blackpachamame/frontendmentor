// from Node Modules
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
// from Own Modules
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioProviders } from './providers/usuario.providers';
import { DatabaseModule } from './../../database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...UsuarioProviders],
  exports: [UsuarioService],
})
export class UsuarioModule {}
