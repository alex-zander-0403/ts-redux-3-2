import type { z } from 'zod';
import type PostSchema from '../utils/validators';

export type PostTypeDb = z.infer<typeof PostSchema>;

export type PostTypeForm = Omit<PostTypeDb, 'id'>;
