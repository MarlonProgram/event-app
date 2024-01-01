import { authMiddleware } from "@clerk/nextjs";

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/weebhok/striper',
        '/api/weebhok/uploadthing',
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/weebhok/striper',
        '/api/weebhok/uploadthing',
    ]
});