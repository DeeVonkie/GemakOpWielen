import { z } from 'zod';
import nodemailer from 'nodemailer';
import { A as AstroError, j as EnvInvalidVariables } from './astro/server_C9eqCq_8.mjs';

const contactFormSchema = z.object({
  name: z.string().min(2, "Vul een geldige naam in."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  phone: z.string().min(8, "Vul een geldig telefoonnummer in."),
  message: z.string().min(1, "Vul een bericht in.")
});
const bookingFormSchema = z.object({
  trailer: z.string().min(1, "Selecteer een gewenste trailer."),
  trailerLabel: z.string().optional(),
  startDate: z.string().min(1, "Vul een startdatum in."),
  endDate: z.string().min(1, "Vul een einddatum in."),
  startTime: z.string().min(1, "Vul een starttijd in."),
  endTime: z.string().min(1, "Vul een eindtijd in."),
  eventType: z.string().min(1, "Selecteer een type evenement."),
  eventTypeLabel: z.string().optional(),
  expectedGuests: z.string().min(1, "Vul het aantal verwachte gasten in."),
  location: z.string().min(2, "Vul een locatie in."),
  cleaning: z.boolean(),
  watertank: z.boolean(),
  generator: z.boolean(),
  firstName: z.string().min(2, "Vul uw voornaam in."),
  lastName: z.string().min(2, "Vul uw achternaam in."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  phone: z.string().min(8, "Vul een telefoonnummer in."),
  comments: z.string().optional()
});

function getContactEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 40px;}
        h1 { color: #16409A; margin-bottom: 20px; }
        h2 { color: #16409A; margin-bottom: 15px; }
        .section { background: #f8f9fa; padding: 25px; margin-bottom: 20px; border-radius: 10px; }
        strong { color: #16409A; }
        .button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #16409A;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #0d2a6d;
        }
      </style>
    </head>
    <body>
      <h1><strong>Nieuwe contactaanvraag via de website</strong> </h1>
      <p>Er is een nieuw contactformulier ingediend via de website van Gemak op Wielen. Reageer via de onderstaande knop.</p>
      
      <div class="section">
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefoon:</strong> ${data.phone}</p>
      </div>

      <div class="section">
        <h2>Bericht:</h2>
        <p>${data.message}</p>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}" class="button">Reageer op dit bericht</a>
      </div>
    </body>
    </html>
  `;
}
function getBookingEmailTemplate(data) {
  const extraServices = [
    data.cleaning && "Schoonmaakservice",
    data.watertank && "Extra Watertank",
    data.generator && "Stroomaggregaat"
  ].filter(Boolean).join(", ");
  data.startDate = new Date(data.startDate).toLocaleDateString("nl-NL");
  data.endDate = new Date(data.endDate).toLocaleDateString("nl-NL");
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 40px;}
        h1 { color: #16409A; margin-bottom: 20px; }
        h2 { color: #16409A; margin-bottom: 15px; }
        .section { background: #f8f9fa; padding: 25px; margin-bottom: 20px; border-radius: 10px; }
        strong { color: #16409A; }
        .button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #16409A;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #0d2a6d;
        }
      </style>
    </head>
    <body>
      <h1><strong>Nieuwe Boekingsaanvraag</strong></h1>
      <p>Er is een nieuwe boekingsaanvraag ingediend via de website van Gemak op Wielen. Reageer via de onderstaande knop.</p>
      
      <div class="section">
        <h2>Aanvraag Details</h2>
        <p><strong>Trailer:</strong> ${data.trailerLabel}</p>
        <p><strong>Datum:</strong> ${data.startDate} - ${data.endDate}</p>
        <p><strong>Tijd:</strong> ${data.startTime} - ${data.endTime}</p>
        <p><strong>Type Evenement:</strong> ${data.eventTypeLabel}</p>
        <p><strong>Verwacht Aantal Gasten:</strong> ${data.expectedGuests}</p>
        <p><strong>Locatie:</strong> ${data.location}</p>
      </div>

      <div class="section">
        <h2>Extra Services</h2>
        <p>${extraServices || "Geen extra services geselecteerd"}</p>
      </div>

      <div class="section">
        <h2>Contactgegevens</h2>
        <p><strong>Naam:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefoon:</strong> ${data.phone}</p>
      </div>

      ${data.comments ? `
        <div class="section">
          <h2>Opmerkingen</h2>
          <p>${data.comments}</p>
        </div>
      ` : ""}

      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}" class="button">Reageer op dit bericht</a>
      </div>
    </body>
    </html>
  `;
}

const schema = {"SMTP_HOST":{"context":"server","access":"secret","type":"string"},"SMTP_PORT":{"context":"server","access":"secret","type":"number"},"SMTP_SECURE":{"context":"server","access":"secret","type":"boolean"},"SMTP_USER":{"context":"server","access":"secret","type":"string"},"SMTP_PASSWORD":{"context":"server","access":"secret","type":"string"}};

function invalidVariablesToError(invalid) {
  const _errors = [];
  for (const { key, type, errors } of invalid) {
    if (errors[0] === "missing") {
      _errors.push(`${key} is missing`);
    } else if (errors[0] === "type") {
      _errors.push(`${key}'s type is invalid, expected: ${type}`);
    } else {
      _errors.push(`The following constraints for ${key} are not met: ${errors.join(", ")}`);
    }
  }
  return _errors;
}

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

let _getEnv = (key) => process.env[key];
function getEnv$1(...args) {
  return _getEnv(...args);
}
function createInvalidVariablesError(key, type, result) {
  return new AstroError({
    ...EnvInvalidVariables,
    message: EnvInvalidVariables.message(
      invalidVariablesToError([{ key, type, errors: result.errors }])
    )
  });
}

// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};
_internalGetSecret("SMTP_HOST");
_internalGetSecret("SMTP_PORT");
_internalGetSecret("SMTP_SECURE");
_internalGetSecret("SMTP_USER");
_internalGetSecret("SMTP_PASSWORD");

function createMailTransporter() {
  var smtpConfig = {
    host: getSecret("SMTP_HOST"),
    port: parseInt(getSecret("SMTP_PORT") || "587"),
    secure: getSecret("SMTP_SECURE") === "true",
    auth: {
      user: getSecret("SMTP_USER"),
      pass: getSecret("SMTP_PASSWORD")
    }
  };
  return nodemailer.createTransport(smtpConfig);
}
const sendContactEmail = async (data) => {
  const transporter = createMailTransporter();
  const emailContent = getContactEmailTemplate(data);
  const mailOptions = {
    from: '"Gemak op Wielen | Website" <noreply@gemakopwielen.nl>',
    to: "info@gemakopwielen.nl",
    subject: `Nieuwe contactaanvraag van ${data.name}`,
    html: emailContent
  };
  await transporter.sendMail(mailOptions);
};
const sendBookingEmail = async (data) => {
  const transporter = createMailTransporter();
  const emailContent = getBookingEmailTemplate(data);
  const mailOptions = {
    from: '"Gemak op Wielen | Website" <noreply@gemakopwielen.nl>',
    to: "info@gemakopwielen.nl",
    subject: `Nieuwe Boekingsaanvraag - ${data.trailerLabel}`,
    html: emailContent
  };
  await transporter.sendMail(mailOptions);
};

export { sendContactEmail as a, bookingFormSchema as b, contactFormSchema as c, sendBookingEmail as s };
