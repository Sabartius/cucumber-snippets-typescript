function TypescriptSyntax() {
  return {
    build: function build (functionName, pattern, parameters, comment) {
      var callbackName = parameters[parameters.length - 1];
      var snippet =
        'this.' + functionName + '(' + pattern + ', (' + parameters.join(': any , ') + ': any' + ') => {' + '\n' +
        '  // ' + comment + '\n' +
        '  ' + callbackName + '(null, \'pending\');\n' +
        '});';
      return snippet;
    }
  };
}

module.exports = TypescriptSyntax;