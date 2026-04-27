# Environment Variables

## Required for production (set in Vercel dashboard)

| Variable | Description | Where to get it |
|---|---|---|
| RESEND_API_KEY | Resend API key for email sending | resend.com → API Keys |
| NATHAN_EMAIL | Nathan's email address | nathan@nathankoenigsberg.ca |
| GAVIN_EMAIL | Gavin's email for BCC on all leads | your email |
| NEXT_PUBLIC_GTM_ID | Google Tag Manager container ID | tagmanager.google.com |
| NEXT_PUBLIC_SITE_URL | Production URL | https://calgaryrealtorfinder.ca |

## Setup steps

### Resend
1. Create account at resend.com
2. Add and verify domain: calgaryrealtorfinder.ca
3. Add DNS records to domain registrar (MX, SPF, DKIM)
4. Create API key with sending permissions
5. Add to Vercel environment variables

### Google Tag Manager
1. Create GTM account at tagmanager.google.com
2. Create container for calgaryrealtorfinder.ca
3. Copy container ID (format: GTM-XXXXXXX)
4. Add to Vercel environment variables
5. In GTM: create GA4 tag, trigger on all pages
6. Create conversion trigger for custom event: realtor_match_request

### Google Search Console
1. Add property: https://calgaryrealtorfinder.ca
2. Verify via HTML tag — copy verification token
3. Add token to GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN in layout.tsx metadata
4. Submit sitemap: https://calgaryrealtorfinder.ca/sitemap.xml

### Vercel Domain
1. Add domain in Vercel project settings
2. Update nameservers at domain registrar OR add A/CNAME records
3. Wait for SSL provisioning (automatic, usually under 5 minutes)
