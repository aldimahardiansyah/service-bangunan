import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
	name: 'service-bangunan',
	title: 'Service Bangunan ID',
	projectId: 'yggy4px7',
	dataset: 'production',
	plugins: [structureTool()],
	schema: { types: schemaTypes }
});
