export const CONTACT_INFO = {
  PHONE_DISPLAY: "+55 63 99999-2505",
  PHONE_NUMBER: "5563999992505",
  ADDRESS_STREET: "Avenida Amazonas, nº 1271",
  ADDRESS_NEIGHBORHOOD: "Setor Central",
  CITY: "Gurupi",
  STATE: "TO",
  ZIP: "77403-030",
  FULL_ADDRESS: "Avenida Amazonas, nº 1271, Setor Central, Gurupi-TO",
  MAPS_URL: "https://maps.google.com/?q=Clínica+Femma+Gurupi+TO",
  INSTAGRAM_HANDLE: "@freitas.lab",
  INSTAGRAM_URL: "https://www.instagram.com/freitas.lab",
  CRM: "CRM-TO 4138",
  RQE: "RQE 2906",
};

export const WHATSAPP_MESSAGES = {
  DEFAULT: "Olá, gostaria de marcar uma consulta com a Dra Fernanda.",
  HEADER: "Olá, gostaria de marcar uma consulta com a Dra Fernanda.",
  UROGYNECOLOGY: "Olá, gostaria de marcar uma consulta com a Dra Fernanda.",
  LOCATION: "Olá, gostaria de marcar uma consulta com a Dra Fernanda.",
  FAQ: "Olá, tenho outra dúvida sobre a consulta com a Dra. Fernanda.",
};

export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.DEFAULT) => {
  return `https://wa.me/${CONTACT_INFO.PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};