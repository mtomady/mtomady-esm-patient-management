import type { TFunction } from 'i18next';
import type { CohortType } from '../api/types';

/**
 * Localized label for a cohort type. Translation keys match `display` (same as server `name`), e.g.
 * `"System List"` in JSON. Same string is passed twice to `t` (key + fallback when missing).
 */
export function getCohortTypeDisplayLabel(cohortType: CohortType, t: TFunction): string {
  if (!cohortType) {
    return '';
  }
  const display = cohortType.display;
  return t(display, display);
}
