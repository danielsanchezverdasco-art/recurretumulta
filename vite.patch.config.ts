import base from "/workspace/codigo-original/limpio/vite.config.ts";
export default { ...base, root: "/workspace/codigo-original/limpio", build: { ...base.build, outDir: "/workspace/distnew", emptyOutDir: true, copyPublicDir: false } };
