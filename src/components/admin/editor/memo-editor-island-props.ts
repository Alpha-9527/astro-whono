import type { AdminMemoEditorValues } from '../../../lib/admin-console/content-shared';

export type MemoEditorIslandProps = {
  endpoint: string;
  exportEndpoint: string;
  previewEndpoint: string;
  imageUploadEndpoint: string;
  returnHref: string;
  entryId: string;
  revision: string;
  initialFrontmatter: AdminMemoEditorValues;
  initialBody: string;
};
