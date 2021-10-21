/**
 * Grasshopper if/else review

    In the game you are creating, the role of the main function is to check the input and return a call to the appropriate function.

    The preloaded function available are forward() and backward().

    Two variables (FW_COUNT and BW_COUNT) are also predefined - don't touch them and don't worry about them!

    The possible inputs and the required actions are:

        "forward": call the forward() function, and return its result
        "backward": call the backward() function, and return its result
        anything else: return "Not a valid input."
 */

const fwCount = 0;
const bwCount = 0;

function main (input) {
  switch (input) {
    case 'forward':
      fwCount += 1;
      return 'fw';
    case 'backward':
      bwCount += 1;
      return 'bw';
    default:
      return 'Not a valid input.';
  }
}