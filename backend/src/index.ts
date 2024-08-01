import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { cors } from "hono/cors";
import {
  create_blog,
  singin,
  singup,
  update_blog,
} from "@harshith6322/medium-common";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    jwt_token: string;
  };
  Variables: {
    id: string;
  };
}>();

//auth_middleware
app.use(cors());
app.use("/api/v1/blog/*", async (c, next) => {
  const headers = c.req.header("authorization") || "";
  try {
    const verify_jwt = await verify(headers, c.env.jwt_token);
    console.log(verify_jwt);
    if (!verify_jwt.id)
      return c.json({ err: true, status: "404", msg: "unauthorized" });
    //@ts-ignore
    c.set("id", verify_jwt.id);
    await next();
  } catch (err) {
    // return c.redirect("/", 301);
    // return c.redirect('/', 301)

    return c.json({ err: true, status: "404", msg: "unauthorized" });
  }
});

//singup route
app.post("/api/v1/singup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();

    const { success } = singup.safeParse(body);
    if (!success) return c.json({ err: true, msg: "incorrect inputs" });
    const userdata = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    if (!userdata) return c.json({ err: true, msg: "invalid email" });

    const token = await sign({ id: userdata.id }, c.env.jwt_token);

    return c.json({ err: false, msg: "account has created", token: token });
  } catch {
    return c.json({ err: true, msg: "some thing went wrong" });
  }
});

//singin
app.post("/api/v1/singin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const { success } = singin.safeParse(body);
    if (!success) return c.json({ err: true, msg: "incorrect inputs" });
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) return c.json({ err: true, msg: "user not found" });
    const token = await sign({ id: user.id }, c.env.jwt_token);

    return c.json({ err: false, msg: "singin done", token: token });
  } catch {
    return c.status(404);
  }
});

//blog
app.post("/api/v1/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const _id = c.get("id");
  const { success, error } = create_blog.safeParse(body);

  if (!success)
    return c.json({ err: true, msg: "incorrect inputs", error: error });
  const user = await prisma.user.findUnique({
    where: {
      id: _id,
    },
  });

  if (!user) return c.json({ err: true, msg: "some thing went worng" });
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorID: _id,
    },
  });

  if (!post) return c.json({ err: true, msg: "err" });

  return c.json({
    err: false,
    msg: "post have been created",
    published: post.published,
    postId: post.id,
  });
});

app.get("/api/v1/blog/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id = c.req.param("id"); // Extracting blog ID from request params
    const blog = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        author: {
          select: {
            name: true,
          },
        },
        title: true,
        content: true,
        published: true,
      },
    });

    if (!blog) {
      return c.json({ err: true, msg: "Cannot find blog" });
    }

    return c.json({ err: false, blog: blog });
  } catch (err: any) {
    // Typing the error as any to avoid TypeScript errors
    return c.json({ err: true, msg: `Something went wrong: ${err.message}` });
  }
});

app.get("/api/v1/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,

        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blog) return c.json({ err: true, msg: "no blogs" });
    return c.json({ posts: blog });
  } catch {
    return c.json({ err: true, msg: "some thing went wrong" });
  }
});

export default app;
function next() {
  throw new Error("Function not implemented.");
}
