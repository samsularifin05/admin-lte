export const HEADER = "HEADER";
export const FOOTER = "FOOTER";
export const SIDEBAR = "SIDEBAR";
export const CONTENT = "CONTENT";

export interface handleSetPageSidebar {
  type: typeof SIDEBAR;
}

export interface handleSetFooter {
  type: typeof FOOTER;
}

export interface handleSetPageHeader {
  type: typeof HEADER;
}

export interface handleSetContent {
  type: typeof CONTENT;
}
