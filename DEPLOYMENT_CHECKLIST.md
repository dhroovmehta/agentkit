# AgentKit Deployment Checklist

## Pre-Deployment Verification

### Build & Compilation
- [x] `npm run build` passes without errors or warnings
- [x] All 17 routes compile successfully (static + dynamic + API routes)
- [x] Edge Runtime compatibility verified (Web Crypto API, no Node.js-only modules)

### Security Implementation
- [x] Nonce-based CSP implemented in middleware.ts
- [x] Per-request nonce generation using Web Crypto API (Edge Runtime compatible)
- [x] `unsafe-inline` and `unsafe-eval` removed from script-src and style-src
- [x] `strict-dynamic` directive blocks scripts without nonce
- [x] CORS headers properly configured for Gumroad webhooks
- [x] Rate limiting middleware integrated
- [x] Static security headers in next.config.mjs (HSTS, X-Content-Type-Options, etc.)
- [x] Git history clean, all commits documented

### Environment Variables
- [x] NEXT_PUBLIC_APP_URL documented
- [x] ConvertKit credentials placeholders present
- [x] Gumroad credentials placeholders present
- [x] Upstash Redis credentials documented for rate limiting

### Code Quality
- [x] No hardcoded credentials or secrets
- [x] Rate limit configuration with clear defaults
- [x] Middleware exempts static assets (performance optimization)
- [x] Webhook IP filtering (defense-in-depth with seller_id validation)

## Deployment Steps

1. Ensure all environment variables are set in Vercel project settings:
   - `NEXT_PUBLIC_APP_URL`
   - `CONVERTKIT_API_KEY`
   - `CONVERTKIT_FORM_ID`
   - `GUMROAD_ACCESS_TOKEN`
   - `GUMROAD_SELLER_ID`
   - `UPSTASH_REDIS_REST_URL` (optional, required for rate limiting in production)
   - `UPSTASH_REDIS_REST_TOKEN` (optional, required for rate limiting in production)

2. Run deployment: `vercel --prod`

3. Monitor deployment logs for any errors

## Post-Deployment Verification

### Security Headers
Verify CSP header is present on each request:
```bash
curl -I https://agentkit-ai.vercel.app
# Expected: Content-Security-Policy header with 'nonce-{random}' and 'strict-dynamic'
```

### CSP Nonce Uniqueness
```bash
for i in {1..5}; do curl -s -I https://agentkit-ai.vercel.app | grep "Content-Security-Policy"; done
# Expected: Each nonce value should be different
```

### API Rate Limiting
```bash
# Test rate limiting by making rapid requests to /api/subscribe
for i in {1..60}; do curl -X POST https://agentkit-ai.vercel.app/api/subscribe; done
# Expected: After configured limit, 429 Too Many Requests responses
```

### Webhook Functionality
- Test Gumroad webhook delivery to `/api/webhooks/gumroad`
- Verify seller_id validation prevents unauthorized payloads
- Check Vercel logs for webhook handling

### Browser Functionality
- Verify homepage renders without CSP violations
- Test ConvertKit email subscription form
- Test Gumroad product purchase flows
- Check browser console for no CSP errors

## Rollback Plan

If critical issues are discovered after deployment:

1. Revert to previous deployment: `vercel rollback`

2. If rollback unavailable, revert code and redeploy:
   ```bash
   git revert 978396f  # env variables commit
   git revert 7ae0c41  # CSP hardening commit
   vercel --prod
   ```

3. Root cause analysis and issue resolution before attempting redeployment

## Security Notes

- Nonce values are cryptographically random (128-bit from Web Crypto API)
- CSP violations are reported but non-blocking (report-uri optional)
- Rate limiting is soft (graceful 429 responses, not blocking infrastructure)
- Webhook IP filtering is defense-in-depth; seller_id is the primary auth mechanism
- All production credentials stored in Vercel project settings, never in code

## Next Steps

After successful deployment:
1. Monitor Vercel analytics and error logs for 24 hours
2. Test all user-facing flows (email capture, product purchase)
3. Review Gumroad webhook delivery metrics
4. Set up monitoring for CSP violations if report-uri is configured
