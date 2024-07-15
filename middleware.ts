import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

// マッチャー
// 空のオブジェクトの場合は全てのリクエストにマッチしているとみなす
export const config = {
  matcher: ["/(.*)"],
};
