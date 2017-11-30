// @flow
export const ContactTypes = {
    mail: "mail",
    pushover: "pushover",
    telegram: "telegram",
    slack: "slack",
    graylog: "graylog",
    ["twilio sms"]: "twilio sms",
    ["twilio voice"]: "twilio voice",
};

export const ContactTypeCaptions = [
    ["mail", "EMail"],
    ["pushover", "Pushover"],
    ["telegram", "Telegram"],
    ["twilio sms", "Twilio SMS"],
    ["twilio voice", "Twilio voice"],
    ["slack", "slack"],
    ["graylog", "GrayLog"],
];

export type ContactType = $Keys<typeof ContactTypes>;
