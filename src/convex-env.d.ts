// Allows TypeScript to resolve process.env used in Convex backend files
// that are transitively included via the @/convex/* alias
declare const process: { env: Record<string, string | undefined> };
