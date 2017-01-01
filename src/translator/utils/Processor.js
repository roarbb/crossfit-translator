import movements from '../lists/Movements'
import acronyms from '../lists/Acronyms'

class Processor {
  constructor() {
    this.availableTransformations = [
      'nl2br',
      'lbsToKg',
      'acronyms',
      'links',
    ]
  }

  get transformations() {
    return this.availableTransformations;
  }

  nl2br (input) {
    var breakTag = '<br />';
    return (input + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  }

  lbsToKg(input) {
    return input.replace(/(\d+)\s*\/*\s*(\d+)*\s*lbs*/gi, (match, p1, p2) => {
      let p2string = ""

      if(p2) {
        p2string = `/${this._toKg(p2)}`
      }

      return `${this._toKg(p1)}${p2string} kg`;
    });
  }

  _toKg(number) {
    return Math.round((number*0.453592)*100) / 100;
  }

  acronyms(input) {
    acronyms.forEach(acronym => {
      const regex = new RegExp(acronym.regex, "ig");

      input = input.replace(regex, match => acronym.name);
    });

    return input;
  }

  links(input) {
    movements.forEach(movement => {
      const regex = new RegExp(movement, "ig");

      input = input.replace(regex, match => {
        return `<a
          href="https://www.youtube.com/results?search_query=${match}+demo+crossfit"
          target="_blank">
          ${match}</a>`;
      });
    });

    return input;
  }
}

export default Processor;
