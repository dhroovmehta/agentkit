import { describe, it, expect } from "vitest";
import {
  templates,
  bundles,
  allAccessPlan,
  getTemplateBySlug,
  getTemplatesByIds,
} from "@/content/templates";

describe("Template Data Integrity", () => {
  it("has exactly 10 templates", () => {
    expect(templates).toHaveLength(10);
  });

  it("every template has required fields", () => {
    for (const t of templates) {
      expect(t.id).toBeGreaterThan(0);
      expect(t.slug).toBeTruthy();
      expect(t.name).toBeTruthy();
      expect(t.category).toBeTruthy();
      expect(t.tagline).toBeTruthy();
      expect(t.description.length).toBeGreaterThan(50);
      expect(t.includes.length).toBeGreaterThan(0);
      expect(t.features.length).toBeGreaterThan(0);
      expect(t.useCases.length).toBeGreaterThan(0);
      expect(t.setupTime).toBeTruthy();
      expect(t.checkoutUrl).toBeTruthy();
      expect(typeof t.isFree).toBe("boolean");
      expect(typeof t.price).toBe("number");
      expect(t.price).toBeGreaterThanOrEqual(0);
    }
  });

  it("all slugs are unique", () => {
    const slugs = templates.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("all IDs are unique", () => {
    const ids = templates.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has exactly one free template", () => {
    const freeTemplates = templates.filter((t) => t.isFree);
    expect(freeTemplates).toHaveLength(1);
    expect(freeTemplates[0].price).toBe(0);
  });

  it("paid templates all have price > 0", () => {
    const paidTemplates = templates.filter((t) => !t.isFree);
    for (const t of paidTemplates) {
      expect(t.price).toBeGreaterThan(0);
    }
  });
});

describe("Template Lookup Functions", () => {
  it("getTemplateBySlug returns correct template", () => {
    const t = getTemplateBySlug("content-repurposing");
    expect(t).toBeDefined();
    expect(t!.name).toBe("Content Repurposing Pipeline");
  });

  it("getTemplateBySlug returns undefined for nonexistent slug", () => {
    expect(getTemplateBySlug("nonexistent")).toBeUndefined();
  });

  it("getTemplatesByIds returns matching templates", () => {
    const results = getTemplatesByIds([1, 3, 5]);
    expect(results).toHaveLength(3);
    expect(results.map((t) => t.id)).toEqual([1, 3, 5]);
  });

  it("getTemplatesByIds returns empty array for no matches", () => {
    expect(getTemplatesByIds([999])).toHaveLength(0);
  });
});

describe("Bundle Data Integrity", () => {
  it("has at least 2 bundles", () => {
    expect(bundles.length).toBeGreaterThanOrEqual(2);
  });

  it("every bundle references valid template IDs", () => {
    const validIds = new Set(templates.map((t) => t.id));
    for (const bundle of bundles) {
      for (const templateId of bundle.templateIds) {
        expect(validIds.has(templateId)).toBe(true);
      }
    }
  });

  it("bundle prices are less than sum of individual templates", () => {
    for (const bundle of bundles) {
      const individualTotal = getTemplatesByIds(bundle.templateIds).reduce(
        (sum, t) => sum + t.price,
        0
      );
      expect(bundle.price).toBeLessThan(individualTotal);
    }
  });

  it("bundle original prices are greater than or equal to discounted price", () => {
    for (const bundle of bundles) {
      expect(bundle.originalPrice).toBeGreaterThan(bundle.price);
    }
  });
});

describe("All-Access Plan", () => {
  it("has monthly pricing", () => {
    expect(allAccessPlan.period).toBe("month");
    expect(allAccessPlan.price).toBeGreaterThan(0);
  });

  it("has features listed", () => {
    expect(allAccessPlan.features.length).toBeGreaterThan(0);
  });

  it("has a checkout URL", () => {
    expect(allAccessPlan.checkoutUrl).toBeTruthy();
  });
});
