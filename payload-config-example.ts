import { buildConfig } from 'payload/config';
import path from 'path';

// Importar colecciones
import Users from './collections/Users';
import Media from './collections/Media';
import Pages from './collections/Pages';
import Projects from './collections/Projects'; // Nueva colección

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: 'webpack', // o 'vite'
  },
  collections: [
    Users,
    Media,
    Pages,
    Projects, // Agregar aquí
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: {
    // Tu configuración de base de datos
  },
  // Otras configuraciones...
});