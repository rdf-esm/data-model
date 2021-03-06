import { NamedNode } from './named-node.js'

export class Literal {
  constructor (value, language, datatype) {
    this.value = value
    this.datatype = Literal.stringDatatype
    this.language = ''

    if (language) {
      this.language = language
      this.datatype = Literal.langStringDatatype
    } else if (datatype) {
      this.datatype = datatype
    }
  }

  equals (other) {
    return !!other && other.termType === this.termType && other.value === this.value &&
      other.language === this.language && other.datatype.equals(this.datatype)
  }

  get termType () {
    return 'Literal'
  }
}

Literal.langStringDatatype = new NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString')
Literal.stringDatatype = new NamedNode('http://www.w3.org/2001/XMLSchema#string')
