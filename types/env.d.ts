declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly API_URL: string;
    readonly API_BASE_PATH: string;
  }
}
