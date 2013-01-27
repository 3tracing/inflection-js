  This code is based in part on the work done in Ruby to support
  infection as part of Ruby on Rails in the ActiveSupport's Inflector
  and Inflections classes.  It was initally ported to Javascript by
  Ryan Schuft (ryan.schuft@gmail.com) in 2007 and now converted to AMD
  by Ryan Gasparini in 2013.

  The code is available at http://code.google.com/p/inflection-js/

  The basic usage is:
  
    1. Include this script with RequireJS
    2. Pass your string into any of the available methods

  Currently implemented functions:

    InflectionJS.pluralize(string) == String
      renders a singular English language noun into its plural form
      normal results can be overridden by passing in an alternative

    InflectionJS.singularize(string) == String
      renders a plural English language noun into its singular form
      normal results can be overridden by passing in an alterative

    InflectionJS.camelize(string) == String
      renders a lower case underscored word into camel case
      the first letter of the result will be upper case unless you pass true
      also translates "/" into "::" (underscore does the opposite)

    InflectionJS.underscore(string) == String
      renders a camel cased word into words seperated by underscores
      also translates "::" back into "/" (camelize does the opposite)

    InflectionJS.humanize(string) == String
      renders a lower case and underscored word into human readable form
      defaults to making the first letter capitalized unless you pass true

    InflectionJS.capitalize(string) == String
      renders all characters to lower case and then makes the first upper

    InflectionJS.dasherize(string) == String
      renders all underbars and spaces as dashes

    InflectionJS.titleize(string) == String
      renders words into title casing (as for book titles)

    InflectionJS.demodulize(string) == String
      renders class names that are prepended by modules into just the class

    InflectionJS.tableize(string) == String
      renders camel cased singular words into their underscored plural form

    InflectionJS.classify(string) == String
      renders an underscored plural word into its camel cased singular form

    InflectionJS.foreign_key(string) == String
      renders a class name (camel cased singular noun) into a foreign key
      defaults to seperating the class from the id with an underbar unless
      you pass true

    InflectionJS.ordinalize(string) == String
      renders all numbers found in the string into their sequence like "22nd"
