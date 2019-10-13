import * as dotenv from 'dotenv'
import * as Joi from '@hapi/joi'
import * as fs from 'fs'

export interface IEnvConfig {
  [key: string]: string
}

export class ConfigService {
  private envConfig: IEnvConfig

  constructor(filePath: string){
    let config : dotenv.DotenvParseOutput
    void(filePath && dotenv.parse(fs.readFileSync(filePath)))
    this.envConfig = this.validateInput(config)
  }

  // this needs a param envConfig bases on the interface IEnvConfig and return something based on the interface IEnvConfig
  private validateInput(envConfig: IEnvConfig): IEnvConfig {
    const envVarsSchema : Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
                   .valid('development', 'production', 'test')
                   .default('development'),
      PORT:     Joi.number().default(30102),
      PG_USER:  Joi.string().required(),
      PG_PW:    Joi.string().required(),
      PG_HOST:  Joi.string().default('localhost'),
    })
    const { error, value: validateEnvConfig } = envVarsSchema.validate(envConfig)
    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }
    return validateEnvConfig
  }

  get(key: string): string{
    return this.envConfig[key]
  }
}
