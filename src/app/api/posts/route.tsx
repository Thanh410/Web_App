import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Posts";

export const GET = async (request: any) => {
  const url = new URL(request.url);
  const username: any = url.searchParams.get("username");

  try {
    await Connect();
    const posts: any = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: any) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await Connect();
    await newPost.save();

    return new NextResponse("Post has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
