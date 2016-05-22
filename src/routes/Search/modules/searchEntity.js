// ------------------------------------
// Constants
// ------------------------------------
export const GOTO_ENTITY = 'GOTO_ENTITY'

// ------------------------------------
// Actions
// ------------------------------------
export function gotoEntity (id, results) {
  window.connectify_browserHistory.replace('/entity/' + id)
  return {
    type: GOTO_ENTITY,
    results: results,
    entityId: id
  }
}
