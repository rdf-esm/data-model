export class DefaultGraph {
  get value () {
    return ''
  }

  equals (other) {
    return !!other && other.termType === this.termType
  }

  get termType () {
    return 'DefaultGraph'
  }
}

export const defaultGraphInstance = new DefaultGraph()
