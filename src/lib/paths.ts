/** Resolve a public asset or portfolio route at the configured deployment prefix. */
export function sitePath(path: string) {
  return (process.env.NEXT_PUBLIC_BASE_PATH || "") + path;
}
