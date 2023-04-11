import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const YAML_CONFIG_FILENAME = '../../env/.yaml';
  const yamlConfig = yaml.load(
    fs.readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
  const packageJson = JSON.parse(
    fs.readFileSync(join(__dirname, '../../package.json'), 'utf8'),
  );
  const env = yamlConfig.Environment.env;

  if (env === 'LIVE') {
    return;
  }

  // if (env === 'localhost') {
  const options = new DocumentBuilder()
    .setTitle(`개발자A의 사이드 프로젝트`)
    .setDescription('사이드 프로젝트')
    .setContact('DOGFOOT', 'https://dogfoot.info', 'richryankim@gmail.com')
    .setVersion(packageJson.version)
    .addTag(
      'Notice',
      `2023-03-25. swagger 적용
      `,
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },

    customSiteTitle: `Swagger Docs`,
  });
  // }
}
