import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Posts";

export const GET = async (request: any, { params }: any) => {
  const { id } = params;
  try {
    await Connect();
    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request: any, { params }: any) => {
  const { id } = params;
  try {
    await Connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
