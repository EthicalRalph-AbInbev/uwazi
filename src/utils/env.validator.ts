import * as Joi from 'joi';

export const envVarsSchema = Joi.object({
  PORT: Joi.number().default(5000),

  FINGERPRINT_SERVICE_URL: Joi.string().required(),
});
