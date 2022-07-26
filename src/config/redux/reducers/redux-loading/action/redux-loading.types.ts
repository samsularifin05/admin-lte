export const SET_LOADING = "SET_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const SET_SPLASHSCREEN = "SET_SPLASHSCREEN";
export const STOP_SPLASHSCREEN = "STOP_SPLASHSCREEN";
export const SET_LOADING_APPROVE = "SET_LOADING_APPROVE";
export const STOP_LOADING_APPROVE = "STOP_LOADING_APPROVE";

export type loading = {
  loading: boolean;
  splashScreen: boolean

};

export interface setLoading {
  type: typeof SET_LOADING;
}

export interface stopLoading {
  type: typeof STOP_LOADING;
}

export interface setLoadingApprove {
  type: typeof SET_LOADING_APPROVE;
}

export interface stopLoadingApprove {
  type: typeof STOP_LOADING_APPROVE;
}

export interface setSplashScreen {
  type: typeof SET_SPLASHSCREEN
}

export interface stopSplashScreen {
  type: typeof STOP_SPLASHSCREEN
}