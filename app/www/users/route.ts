import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //route는 handler임.ok
  // request method가 GET인지 POST인지 확인하지 않아도됨
  //but form 을 처리하기 위해서 route핸들러를 사용해서
  //API route를 구축하는거는 필수가아님
  console.log(request);
  return Response.json({
    ok: true,
  });
}
export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("log the user in!!!");
  return Response.json(data);
}
