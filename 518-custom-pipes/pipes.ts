import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmark'
})
export class CheckmarkPipe implements PipeTransform {
  transform(input: boolean) {
    const checkMark = '\u2713';
    const xMark = '\u2718';
    return input ? checkMark : xMark;
  }
}

@Pipe({
  name: 'toCaps'
})
export class ToCapsPipe implements PipeTransform {
  transform(input: string) {
    if (input && input.toUpperCase) {
      return input.toUpperCase();
    }
    return input;
  }
}

@Pipe({
  name: 'containsX'
})
export class ContainsXPipe implements PipeTransform {
  transform(collection: string[], searchTerm: string) {
    if (collection && collection.filter) {
      return collection.filter(v => v.indexOf(searchTerm) > -1);
    }
    return collection;
  }
}

@Pipe({
  name: 'fieldRange'
})
export class FieldRangePipe implements PipeTransform {
  transform(input: { [name: string]: any }[], fieldName: string,
    lower: string, upper: string) {
    // Why {[name: string]: string}[]? Because the consumer of this pipe
    // could send us any kind of object, but we're expecting to do string
    // comparisons on the property values.
    if (input && input.filter) {
      return input.filter(v => (v[fieldName] >= lower && v[fieldName] <= upper));
    }
    return input;
  }
}
