export const INITIAL_CYCLES_STATE = {
  cycles: [],
  activeCycleId: null,
}

export function checkingCyclesInLocalStorage() {
  const storedStateAsJSON = localStorage.getItem(
    '@ignite-timer:cycles-state-1.0.0',
  )

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  }

  return INITIAL_CYCLES_STATE
}
