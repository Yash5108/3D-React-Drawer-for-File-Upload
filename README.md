# 3D Drawer Upload Component

A React Three.js component that displays an interactive 3D drawer with file upload functionality.

## Features
- Interactive 3D drawer with hover effects
- File upload functionality on top shelf
- Upload progress animation
- Delete uploaded files
- Customizable textures and positions
- Real-time shadows and lighting

## Installation

1. First, create a new React project (if you haven't already):
```bash
npx create-react-app my-drawer-app
cd my-drawer-app
```

2. Install required dependencies:
```bash
npm install @react-three/fiber @react-three/drei three @react-spring/three
```

## Project Structure
```plaintext
src/
  ├── App.js
  ├── DrawerModel.js
  └── public/
      ├── RawDrawer.glb    # 3D model file
      └── drawer_texture.png # Texture file
```

## Setup

1. Place your 3D model (`RawDrawer.glb`) and texture file in the `public` folder
2. Copy `DrawerModel.js` and update `App.js` with the provided code

## Customization

### Camera Position
In `App.js`, modify the camera properties:
```javascript
camera={{ 
  position: [50, 40, 30], // [x, y, z] coordinates
  fov: 45               // Field of view
}}
```

### Lighting
Adjust ambient and directional light:
```javascript
<ambientLight intensity={0.6} /> // Overall scene brightness
<directionalLight
  position={[10, 10, 5]}  // Light position
  intensity={1.2}         // Light intensity
  castShadow             // Enable shadows
/>
```

### Drawer Position
In `DrawerModel.js`, modify the group position and rotation:
```javascript
<group
  position={[0, -1, 0]}        // [x, y, z] position
  rotation={[-0, Math.PI/4, 0]} // Rotation in radians
>
```

### Upload Button Styling
Customize the upload button appearance in `DrawerModel.js`:
```javascript
<label
  style={{
    padding: "10px 20px",
    background: "#56aafea1",    // Button color
    border: "2px outset #ffffff60",
    // ...other styles
  }}
>
```

## Props

### DrawerModel Component
| Prop | Type | Description |
|------|------|-------------|
| textureURL | string | Path to texture image |

## Usage Example

```javascript
import { Canvas } from "@react-three/fiber";
import DrawerModel from "./DrawerModel";

function App() {
  return (
    <Canvas shadows camera={{ position: [50, 40, 30], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
      />
      <DrawerModel textureURL="/drawer_texture.png" />
    </Canvas>
  );
}
```

## Model Requirements
- The 3D model should be in GLB format
- Top shelf should include "shelf1" in its mesh name
- Model should be UV mapped for proper texture application

## Performance Tips
1. Optimize your 3D model size
2. Compress textures
3. Adjust shadow map size based on performance needs
4. Consider using `draco` compression for GLB files

## Browser Support
- Requires WebGL 2.0 support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with WebGL support

## Troubleshooting

### Common Issues
1. **Model not visible**: Check camera position and model position
2. **Textures not loading**: Ensure texture path is correct
3. **Hover not working**: Verify mesh names include "shelf1"

### Debug Mode
Add `gl={{ debug: true }}` to Canvas component for debugging:
```javascript
<Canvas gl={{ debug: true }} ...>
```

## Available Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder.

## License
MIT License

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## Acknowledgments
- Three.js
- React Three Fiber
- React Spring
- Drei