import z from "zod";

export const singup = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional(),
});

export type singUP = z.infer<typeof singup>;

export const singin = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type singIN = z.infer<typeof singin>;

export const create_blog = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export type create_BLOG = z.infer<typeof create_blog>;

export const update_blog = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export type update_BLOG = z.infer<typeof create_blog>;
