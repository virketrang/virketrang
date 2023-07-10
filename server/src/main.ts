import { MikroORM } from '@mikro-orm/core'
import { NestFactory } from '@nestjs/core'
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common'

import { AppModule } from '@/app/app.module'

declare const module: any

const PORT = process.env.PORT || 8080

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.enableCors({
        credentials: true,
        origin: '*'
    })

    await app.get(MikroORM).getSchemaGenerator().ensureDatabase()
    await app.get(MikroORM).getSchemaGenerator().updateSchema()

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            enableDebugMessages: true,
            exceptionFactory: (errors: ValidationError[]) => {
                console.log(errors)
                return new BadRequestException('Validation error')
            }
        })
    )

    await app.listen(PORT)

    if (module.hot) {
        module.hot.accept()
        module.hot.dispose(() => app.close())
    }
}

bootstrap()
