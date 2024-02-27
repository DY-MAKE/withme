export const AskType = {
  NONE: 'NONE',
  CAPTION: 'CAPTION',
};
export type AskType = (typeof AskType)[keyof typeof AskType];
