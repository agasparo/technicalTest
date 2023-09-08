import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { useContainer } from 'class-validator'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
    }),
  )

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  const config = new DocumentBuilder()
    .setTitle('Vacation API')
    .setDescription('The vacation API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)

  app.enableCors()

  await app.listen(3000)
}
bootstrap()
