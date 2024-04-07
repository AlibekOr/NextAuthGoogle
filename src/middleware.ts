export {default} from 'next-auth/middleware'
export const config = {matchers: ['/', '/protected:path*']}