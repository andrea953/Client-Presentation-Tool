---
name: Pnpm audit override conflicts
description: How to verify pnpm audit fixes when a workspace already has central overrides.
---

After `pnpm audit --fix`, inspect existing broad or exact overrides before trusting the generated advisory-range overrides, and verify the resolved lockfile rather than only the configuration.

**Why:** pnpm can retain an older exact override alongside newly generated patched ranges. The exact override may continue forcing the vulnerable version even though the audit fix reports that remediation entries were added.

**How to apply:** In pnpm workspaces with existing overrides, regenerate the lockfile, run `pnpm audit`, inspect `pnpm why` for any remaining finding, and search manifests plus lockfiles for every reported vulnerable package/version pair.