import R from 'ramda'

// setter :: object -> string -> object
export const setter = (obj, prop, value) => R.set(R.lensProp(prop), value, obj)
