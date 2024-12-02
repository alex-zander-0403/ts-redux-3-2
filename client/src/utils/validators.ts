import { z } from 'zod';

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  desc: z.string(),
  url: z.string(),
  userId: z.number().nullable(),
});

export default PostSchema; // ?
