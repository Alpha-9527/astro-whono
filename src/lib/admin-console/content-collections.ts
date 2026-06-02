export type AdminContentCollectionKey = 'essay' | 'bits' | 'memo';
export type AdminContentWriteCollectionKey = 'essay' | 'bits' | 'memo';
export type AdminContentBodyImageUploadCollectionKey = 'essay' | 'memo';
export type AdminContentImageUploadCollectionKey = 'essay' | 'bits' | 'memo';

export const ADMIN_CONTENT_COLLECTION_KEYS = ['essay', 'bits', 'memo'] as const satisfies readonly AdminContentCollectionKey[];
export const ADMIN_CONTENT_WRITE_COLLECTION_KEYS = ['essay', 'bits', 'memo'] as const satisfies readonly AdminContentWriteCollectionKey[];
export const ADMIN_CONTENT_BODY_IMAGE_UPLOAD_COLLECTION_KEYS = ['essay', 'memo'] as const satisfies readonly AdminContentBodyImageUploadCollectionKey[];
export const ADMIN_CONTENT_IMAGE_UPLOAD_COLLECTION_KEYS = ['essay', 'bits', 'memo'] as const satisfies readonly AdminContentImageUploadCollectionKey[];

export const isAdminContentCollectionKey = (value: string): value is AdminContentCollectionKey =>
  (ADMIN_CONTENT_COLLECTION_KEYS as readonly string[]).includes(value);

export const isAdminContentWriteCollectionKey = (value: string): value is AdminContentWriteCollectionKey =>
  (ADMIN_CONTENT_WRITE_COLLECTION_KEYS as readonly string[]).includes(value);

export const isAdminContentBodyImageUploadCollectionKey = (value: string): value is AdminContentBodyImageUploadCollectionKey =>
  (ADMIN_CONTENT_BODY_IMAGE_UPLOAD_COLLECTION_KEYS as readonly string[]).includes(value);

export const isAdminContentImageUploadCollectionKey = (value: string): value is AdminContentImageUploadCollectionKey =>
  (ADMIN_CONTENT_IMAGE_UPLOAD_COLLECTION_KEYS as readonly string[]).includes(value);
