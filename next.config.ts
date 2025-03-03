import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
const NextConfig = {
    output: "standalone" as const,
    images:{
        domains: ['tailus.io', 'privatecodetechnology.com' ],
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
      
};
 
export default withNextIntl(NextConfig);