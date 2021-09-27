//shared_preferences taken from: https://github.com/gregoiresage/fitbit-shared-preferences
import { readFileSync, writeFileSync } from 'fs';
import { me } from 'appbit';

//give this cbor an individual name
//here my apps UUID_fct.cbor
const FILE_NAME = "f100f76b-0a9e-488f-ba35-d1a8531a2d4b_fct.cbor";

export let preferences = {};

try {
  preferences = readFileSync(FILE_NAME, "cbor");
} catch (error) {
    console.warn("Failed to load " + FILE_NAME + ". It is OK if no values were stored yet.");
};

me.addEventListener("unload", () => {
  try {
    writeFileSync(FILE_NAME, preferences, "cbor");
  } catch (error) {
    console.error("Failed to save " + FILE_NAME);
  }
});
