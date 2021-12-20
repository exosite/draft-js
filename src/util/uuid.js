/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @typechecks
 * @flow strict
 * @format
 */

/*eslint-disable no-bitwise */
 function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // Generate a random number from 0 - 16
    const rand = Math.random() * 16 | 0;
    if (c === 'x') {
      // replace all instances of 'x' with 0-9 / a-f
      return rand.toString(16);
    }
    // replace all instances of 'y' with 8-0 / a-b
    return ((rand & 0x3) | 0x8).toString(16)
  });
}

module.exports = uuid;
