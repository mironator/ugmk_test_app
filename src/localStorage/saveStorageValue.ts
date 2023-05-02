export function saveStorageValue<T>(key: string, value: T) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch {
    // do nothing
  }
}
