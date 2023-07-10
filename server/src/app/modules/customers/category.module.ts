import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'

import { Subdivision } from '@/app/entities'

import CategoryController from './category.controller'
import CategoryService from './category.service'

@Module({
    imports: [MikroOrmModule.forFeature([Subdivision])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export default class CategoryModule {}
