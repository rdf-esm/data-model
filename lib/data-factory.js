import { BlankNode } from './blank-node.js'
import { defaultGraphInstance } from './default-graph.js'
import { Literal } from './literal.js'
import { NamedNode } from './named-node.js'
import { Quad } from './quad.js'
import { Variable } from './variable.js'

export function namedNode (value) {
  return new NamedNode(value)
}

export { defaultGraphInstance } from './default-graph.js'

export function blankNode (value) {
  return new BlankNode(value)
}

export function literal (value, languageOrDatatype) {
  if (typeof languageOrDatatype === 'string') {
    if (languageOrDatatype.indexOf(':') === -1) {
      return new Literal(value, languageOrDatatype)
    }

    return new Literal(value, null, namedNode(languageOrDatatype))
  }

  return new Literal(value, null, languageOrDatatype)
}

export function defaultGraph () {
  return defaultGraphInstance
}

export function variable (value) {
  return new Variable(value)
}

export function quad (subject, predicate, object, graph) {
  let subjectTerm = subject
  if ('subject' in subjectTerm && !subjectTerm.termType) {
    subjectTerm = quad(subject.subject, subject.predicate, subject.object, subject.graph)
  }

  return new Quad(subjectTerm, predicate, object, graph || defaultGraphInstance)
}

export function triple (subject, predicate, object) {
  return quad(subject, predicate, object)
}
