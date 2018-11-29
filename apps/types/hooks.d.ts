import * as React from 'react'

export type UpdateState<T> = (
  props: T | ((props: T) => void)
) => void
export type UseStateReturn<T> = [T, UpdateState<T>]

declare module 'react' {
  function useState<T>(props: T): UseStateReturn<T>
  function useEffect(
    create: () =>
      | void
      | Promise<void>
      | (() => void | Promise<void>),
    inputs?: ReadonlyArray<unknown>
  ): void
  function useContext<T>(foo: React.Context<T>): T
  function useReducer<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S
  ): [S, (action: A) => void]
  function useCallback<
    F extends (...args: never[]) => unknown
  >(callback: F, inputs?: ReadonlyArray<unknown>): F
  function useMemo<T>(
    create: () => T,
    inputs?: ReadonlyArray<unknown>
  ): T
  function useRef<T extends unknown>(
    initialValue?: T
  ): React.RefObject<T>
  function useImperativeMethods<T>(
    ref: React.Ref<T>,
    createInstance: () => T,
    inputs?: ReadonlyArray<unknown>
  ): void
  const useMutationEffect: typeof useEffect
  const useLayoutEffect: typeof useEffect
}
