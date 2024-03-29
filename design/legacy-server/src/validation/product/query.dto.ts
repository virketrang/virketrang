import { Transform } from 'class-transformer'
import { IsNumber, IsOptional, IsEnum, IsString, IsBoolean, IsArray } from 'class-validator'

import { PRODUCT_CATEGORY, SORTING_OPTION } from '@/enums/index'
import { toArray, toBoolean, toNumber } from '@/apps/nexus/legacy-server/src/utils'

export default class ProductQueryParams {
    @Transform(({ value }) => toNumber(value, { min: 1, max: 100, default: 20 }))
    @IsNumber()
    @IsOptional()
    public limit!: number

    @IsEnum(PRODUCT_CATEGORY)
    @IsOptional()
    public category!: PRODUCT_CATEGORY

    @Transform(({ value }) => toNumber(value, { min: 1, max: 10000, default: 1 }))
    @IsNumber()
    @IsOptional()
    public minPrice!: number

    @Transform(({ value }) => toNumber(value, { min: 1, max: 10000, default: 10000 }))
    @IsNumber()
    @IsOptional()
    public maxPrice!: number

    @Transform(({ value }) => toBoolean(value))
    @IsBoolean()
    @IsOptional()
    public available!: boolean

    @Transform(({ value }) => toArray(value))
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    public materials!: string[]

    @IsEnum(SORTING_OPTION)
    @IsOptional()
    public sort!: SORTING_OPTION
}
