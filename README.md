# Dev Observatory — Portfolio (Local Scaffold)

This project was scaffolded and copied into your local workspace.

Quick start (Windows PowerShell):

```powershell
cd "C:\Users\Ritesh\OneDrive\Desktop\All Projrcts\RItesh port\dev-observatory-portfolio"
npm install
npm run dev
```

Notes:
- If your machine blocks native modules, consider using Node 18+ and reinstalling.
- Replace iframe `demo` URLs in `src/components/Projects.jsx` with your project demos or sandboxes.
- To add a custom GLTF avatar, replace the `AvatarMesh` in `src/components/Intro.jsx` with a `<primitive object={gltf.scene} />` renderer using `useGLTF` from `@react-three/drei`.
