import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createNewUser(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAllUsers();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findUserbyId(+id);
  }

  @Get('/username/:username')
  findOneByUsername(@Param('username') username: string) {
    return this.usuarioService.findUserbyUsername(username);
  }


  @Get('/role/:role')
  findOnebyRole(@Param('role') role: string) {
    return this.usuarioService.findUserbyId(+role);
  }


  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.updateUserbyID(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.deleteUserById(+id);
  }
}
