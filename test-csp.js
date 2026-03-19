/**
 * Simple test to verify CSP headers are properly set.
 * Starts the dev server and checks CSP on the homepage.
 */
import fetch from "node-fetch";

async function testCSP() {
  // Allow time for server startup
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  try {
    const response = await fetch("http://localhost:3000/", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
    
    const csp = response.headers.get("content-security-policy");
    console.log("CSP Header found:", !!csp);
    
    if (csp) {
      console.log("\nCSP Value:");
      console.log(csp);
      
      // Verify unsafe directives are removed
      const hasUnsafeInline = csp.includes("unsafe-inline");
      const hasUnsafeEval = csp.includes("unsafe-eval");
      const hasNonce = csp.includes("nonce-");
      const hasStrictDynamic = csp.includes("strict-dynamic");
      
      console.log("\n✓ Vulnerability Check:");
      console.log(`  ✗ unsafe-inline present: ${hasUnsafeInline}`);
      console.log(`  ✗ unsafe-eval present: ${hasUnsafeEval}`);
      console.log(`  ✓ nonce present: ${hasNonce}`);
      console.log(`  ✓ strict-dynamic present: ${hasStrictDynamic}`);
      
      if (!hasUnsafeInline && !hasUnsafeEval && hasNonce && hasStrictDynamic) {
        console.log("\n✓ CSP HARDENED: All unsafe directives removed, nonce-based CSP active");
      } else {
        console.log("\n✗ CSP verification failed");
        process.exit(1);
      }
    } else {
      console.log("✗ No CSP header found");
      process.exit(1);
    }
  } catch (err) {
    console.error("Test failed:", err.message);
    process.exit(1);
  }
}

testCSP();
