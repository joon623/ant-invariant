/*
 * Designed to
 * - Guarantee runtime conditions are met and throw meaningful errors otherwise.
 * - Improve developer experience by preventing unexpected behaviors at runtime.
 *
 * @param condition - The condition that should be true.
 * @param message - The message to include in the error if the condition is false.
 *
 * @example
 * ```typescript
 * function divide(a: number, b: number): number {
 *   invariant(b !== 0, 'Divider cannot be zero');
 *   return a / b;
 * }
 * ```
 * */
export function invariant(
  condition: unknown,
  message?: string,
): asserts condition {
  if (condition) {
    return;
  }

  if (!condition) {
    throw new Error(message);
  }
}
